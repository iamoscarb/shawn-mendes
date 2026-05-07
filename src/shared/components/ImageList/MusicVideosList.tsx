import type { VideoList } from "../../../interfaces/images.Interface";
import { CustomImageList } from "./CustomImageList";
import { CustomImageItem } from "./CustomImageItem";

interface Props {
    videosList: VideoList[];
    textColor?: string;
}

export const MusicVideosList = ({ videosList, textColor = 'text-white' }: Props) => {
    return (
        <CustomImageList type="video">
            <CustomImageItem videosList={videosList} textColor={textColor} />
        </CustomImageList>
    )
}
