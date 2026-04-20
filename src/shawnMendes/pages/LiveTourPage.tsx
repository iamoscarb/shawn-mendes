import { Box, Typography } from "@mui/material";
import { useTourDates } from "../../hooks/useTourDates";
import { TourTable } from "../../shared/components/TourTable/TourTable";
import { TOUR_MESSAGE, WORLD_TOUR_TITLE } from "../../shared/data/Titles";

export const LiveTourPage = () => {
    const { data: tourInfo, isError: tourError } = useTourDates();

    return (
        <Box className="bg-[url('https://www.jambase.com/wp-content/uploads/2025/05/shawn-mendes-2025-tour-promo.jpg')] bg-cover bg-center bg-fixed min-h-screen w-full">
            <div className="bg-white/35 pb-3">
                <Typography variant="h3" align="center" className="py-4" sx={{ color: '#6A2D2B', fontWeight: 'bold' }}>
                    {`${WORLD_TOUR_TITLE.toUpperCase()} ${new Date().getFullYear()}`}
                </Typography>

                {tourInfo && !tourError && tourInfo.length > 0 && (
                    <div>
                        <TourTable tourData={tourInfo} glass={true} color="#6A2D2B" />
                    </div>
                )}

                {!tourInfo || tourError || tourInfo.length === 0 && (
                    <Typography variant='subtitle1' align='center'
                        sx={{
                            color: 'primary.dark',
                            fontWeight: 'bold',
                        }}>
                        {TOUR_MESSAGE}
                    </Typography>
                )}
            </div>
        </Box>
    )
}
