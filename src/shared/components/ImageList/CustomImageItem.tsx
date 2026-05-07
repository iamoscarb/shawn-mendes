import { ImageListItem, ImageListItemBar } from "@mui/material"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import type { VideoList } from "../../../interfaces/images.Interface";

interface Props {
    videosList: VideoList[],
    textColor?: string;
}
export const CustomImageItem = ({ videosList, textColor }: Props) => {
    return (
        <>
            {videosList.map((item) => (
                <ImageListItem key={item.img}>
                    <div className="group relative w-full cursor-pointer overflow-hidden rounded-lg border-solid border-2 border-white" >
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
