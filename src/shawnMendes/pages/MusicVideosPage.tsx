import { Box, Typography } from "@mui/material"
import { useVideos } from "../../hooks/useVideos"
import { BoxWithMargin } from "../../shared/components/Box/BoxWithMargin"
import { CustomDivider } from "../../shared/components/Divider/CustomDivider"
import { CustomTitle } from "../../shared/components/Title/CustomTitle"
import { VIDEOS_MESSAGE_ERROR, VIDEOS_TITLE } from "../../shared/data/Titles"
import { MusicVideosList } from "../../shared/components/ImageList/MusicVideosList"

export const MusicVideosPage = () => {
    const { data: videosData, isError, isLoading } = useVideos();
    return (
        <BoxWithMargin bgColor="secondary.light">
            <title>{`${VIDEOS_TITLE} - Shawn Mendes`}</title>
            <CustomTitle title={VIDEOS_TITLE} />
            <CustomDivider color="primary.main" />
            <br />
            {isLoading || isError || !videosData || videosData.length === 0 && (
                <Box className="h-screen text-center">
                    <Typography variant="subtitle1" align="center"
                        sx={{ color: 'primary.dark', fontWeight: 'bold' }}>
                        {VIDEOS_MESSAGE_ERROR}
                    </Typography>

                </Box>
            )}
            {!isError && videosData && videosData.length > 0 && (
                <MusicVideosList videosList={videosData || []} />
            )}
        </BoxWithMargin>
    )
}
