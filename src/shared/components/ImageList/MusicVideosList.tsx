import type { VideoList } from "../../../interfaces/images.Interface";
import { CustomImageList } from "./CustomImageList";
import { CustomImageItem } from "./CustomImageItem";
import { useOpenVideoDialog } from "../../../hooks/useOpenVideoDialog";
import { DialogVideo } from "../Dialog/DialogVideo";

interface Props {
    videosList: VideoList[];
    textColor?: string;
}

export const MusicVideosList = ({ videosList, textColor = 'text-white' }: Props) => {
    const { handleCloseDialog, handleSongClick: handleVideoClick, openDialog, songData: videoData } = useOpenVideoDialog()

    return (
        <CustomImageList type="video">
            <CustomImageItem videosList={videosList} textColor={textColor} onVideoClicked={handleVideoClick} />
            <DialogVideo song={videoData} openDialog={openDialog} closeDialog={handleCloseDialog} />
        </CustomImageList>
    )
}
