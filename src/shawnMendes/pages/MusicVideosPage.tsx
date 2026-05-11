import { Box, Typography } from "@mui/material"
import { CircularProgress } from '@mui/material'
import { useVideos } from "../../hooks/useVideos"
import { BoxWithMargin } from "../../shared/components/Box/BoxWithMargin"
import { CustomDivider } from "../../shared/components/Divider/CustomDivider"
import { CustomTitle } from "../../shared/components/Title/CustomTitle"
import { VIDEOS_MESSAGE_ERROR, VIDEOS_TITLE } from "../../shared/data/Titles"
import { CustomButton } from "../../shared/components/Button/CustomButton"
import { CustomImageList } from "../../shared/components/ImageList/CustomImageList"
import { CustomImageItem } from "../../shared/components/ImageList/CustomImageItem"
import { useOpenVideoDialog } from "../../hooks/useOpenVideoDialog"
import { DialogVideo } from "../../shared/components/Dialog/DialogVideo"

export const MusicVideosPage = () => {
    const { data: videosData, isError, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useVideos();
    const { handleCloseDialog, handleSongClick: handleVideoClick, openDialog, songData: videoData } = useOpenVideoDialog()
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

            <CustomImageList type="video">
                {videosData?.pages.map((page, i) => (
                    <CustomImageItem key={`videos${i}`} videosList={page.videos} textColor="text-(--mui-palette-primary) font-bold" onVideoClicked={handleVideoClick} />
                )
                )}
            </CustomImageList>
            <DialogVideo song={videoData} openDialog={openDialog} closeDialog={handleCloseDialog} />

            {!isLoading && hasNextPage && (
                <div className="flex justify-center items-center">
                    <CustomButton
                        text={isFetchingNextPage ? 'Loading...'
                            : hasNextPage
                                ? 'Load more'
                                : 'No more videos'}
                        color="primary"
                        icon={isFetchingNextPage ? <CircularProgress color="inherit" size={20} /> : null}
                        disabled={!hasNextPage || isFetchingNextPage}
                        handleOnClick={fetchNextPage} />
                </div>
            )}
        </BoxWithMargin>
    )
}
