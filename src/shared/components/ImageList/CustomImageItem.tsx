import { ImageListItem, ImageListItemBar } from "@mui/material"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import type { VideoList } from "../../../interfaces/images.Interface";
import type { Songs } from "../../../interfaces/music.interface";
import { useSetDialogValues } from "../../../hooks/useSetDialogValues";

interface Props {
    videosList: VideoList[],
    textColor?: string;
    onVideoClicked: (video: Songs) => void;
}

export const CustomImageItem = ({ videosList, textColor, onVideoClicked }: Props) => {
    return (
        <>
            {videosList.map((item) => (
                <ImageListItem key={item.img}>
                    <div className="group relative w-full cursor-pointer overflow-hidden rounded-lg border-solid border-2 border-white"
                        onClick={() => onVideoClicked(useSetDialogValues(item))} >
                        <img srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="text-center text-white">
                                <PlayCircleIcon sx={{ fontSize: 50 }} />
                            </div>
                        </div>
                    </div>
                    <ImageListItemBar title={item.title} position="below" className={`${textColor}`} sx={{
                        '& .MuiImageListItemBar-title': {
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: 'block',
                            fontFamily: 'Lato'
                        }
                    }} />
                </ImageListItem>
            ))}
        </>
    )
}
