import { Box, Typography } from "@mui/material";
import { useTourDates } from "../../hooks/useTourDates";
import { TourTable } from "../../shared/components/TourTable/TourTable";
import { TOUR_MESSAGE, WORLD_TOUR_TITLE } from "../../shared/data/Titles";
import { CustomTitle } from "../../shared/components/Title/CustomTitle";

export const LiveTourPage = () => {
    const { data: tourInfo, isError: tourError } = useTourDates();
    const year = new Date().getFullYear();

    return (
        <>
            <title>{`Live Tour ${year}`}</title>
            <Box className="bg-[url('https://www.jambase.com/wp-content/uploads/2025/05/shawn-mendes-2025-tour-promo.jpg')] bg-cover bg-center bg-fixed min-h-screen w-full">
                <div className="bg-white/35 py-3">
                    <CustomTitle title={`${WORLD_TOUR_TITLE} ${year}`} color="#6A2D2B" />

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
        </>
    )
}
