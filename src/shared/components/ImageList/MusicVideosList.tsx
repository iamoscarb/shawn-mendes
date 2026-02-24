import { ImageList, ImageListItem, ImageListItemBar, useMediaQuery, useTheme } from "@mui/material"
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

interface VideoList {
    title: string;
    img: string;
}

interface Props {
    videosList: VideoList[];
}

export const MusicVideosList = ({ videosList }: Props) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const getCols = () => {
        if (isMobile) return 1;
        if (isTablet) return 2;
        return 3;
    };

    return (
        <ImageList cols={getCols()} gap={12} sx={{ width: '100%', height: 'auto' }}>
            {videosList.map((item) => (
                <ImageListItem key={item.img}>
                    <div className="group relative w-full cursor-pointer overflow-hidden">
                        <img srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                            className="rounded-md" />
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
