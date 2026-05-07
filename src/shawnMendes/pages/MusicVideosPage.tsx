import { Box, Typography } from "@mui/material"
import { CircularProgress } from '@mui/material'
import { useVideos } from "../../hooks/useVideos"
import { BoxWithMargin } from "../../shared/components/Box/BoxWithMargin"
import { CustomDivider } from "../../shared/components/Divider/CustomDivider"
import { CustomTitle } from "../../shared/components/Title/CustomTitle"
import { VIDEOS_MESSAGE_ERROR, VIDEOS_TITLE } from "../../shared/data/Titles"
import { MusicVideosList } from "../../shared/components/ImageList/MusicVideosList"
import { CustomButton } from "../../shared/components/Button/CustomButton"

export const MusicVideosPage = () => {
    const { data: videosData, isError, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useVideos();
    return (
        <BoxWithMargin bgColor="secondary.light">
            <title>{`${VIDEOS_TITLE} - Shawn Mendes`}</title>
            <CustomTitle title={VIDEOS_TITLE} />
            <CustomDivider color="primary.main" />
            <br />
            {isLoading || isError || !videosData || videosData.pages.length === 0 && (
                <Box className="h-screen text-center">
                    <Typography variant="subtitle1" align="center"
                        sx={{ color: 'primary.dark', fontWeight: 'bold' }}>
                        {VIDEOS_MESSAGE_ERROR}
                    </Typography>

                </Box>
            )}

            {videosData?.pages.map((page, i) => (
                <MusicVideosList key={`videos${i}`} videosList={page.videos} textColor="text-(--mui-palette-primary) font-bold" />
            )
            )}

            {!isLoading && hasNextPage && (<div className="flex justify-center items-center">
                <CustomButton
                    text={isFetchingNextPage ? 'Loading...'
                        : hasNextPage
                            ? 'Load more'
                            : 'No more videos'}
                    color="primary"
                    icon={isFetchingNextPage ? <CircularProgress color="inherit" size={20} /> : null}
                    disabled={!hasNextPage || isFetchingNextPage}
                    handleOnClick={fetchNextPage} />
            </div>)}
        </BoxWithMargin>
    )
}
