import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useNumColsImgList } from "../../../hooks/useNumColsImgList";

interface VideoList {
    title: string;
    img: string;
}

interface Props {
    videosList: VideoList[];
}

export const MusicVideosList = ({ videosList }: Props) => {

    const { getCols } = useNumColsImgList('video');

    return (
        <ImageList cols={getCols()} gap={12} sx={{ width: '100%', height: 'auto' }}>
            {videosList.map((item) => (
                <ImageListItem key={item.img}>
                    <div className="group relative w-full cursor-pointer overflow-hidden">
                        <img srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                            className="rounded-lg border-solid border-1 border-white" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="text-center text-white">
                                <PlayCircleIcon sx={{ fontSize: 50 }} />
                            </div>
                        </div>
                    </div>
                    <ImageListItemBar title={item.title} position="below" className="text-white" sx={{
                        '& .MuiImageListItemBar-title': {
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: 'block',
                        }
                    }} />
                </ImageListItem>
            ))}
        </ImageList>
    )
}
