import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { NetflixIcon } from '../../Icons/NetflixIcon';
import { Button } from '@mui/material';
import { WATCH_NOW } from '../../data/Titles';
import { CustomText } from '../../Icons/CustomText';

interface Props {
    color?: string;
    poster?: string;
    title?: string;
    logo?: string;
    videoPhoto: string;
    videoUrl: string;
}
export const PosterMediaCard = ({ color, poster, title = '', videoPhoto, videoUrl, logo }: Props) => {
    return (
        <div
            className="relative w-full overflow-hidden"
            style={{ backgroundColor: color }}>
            <div className="flex flex-col md:flex-row min-h-75 md:min-h-100">
                {/* Poster Section */}
                <div className="relative w-full md:w-[32%] shrink-0">
                    <div className="relative h-150 md:h-full">
                        <img srcSet={poster}
                            src={poster}
                            alt={`${title} poster`}
                            loading='lazy'
                            className="w-full h-full object-cover object-top-left md:object-center"
                        />
                        {/* Gradient overlay - bottom on mobile, right on desktop */}
                        <div
                            className="absolute inset-0 md:hidden"
                            style={{
                                background: `linear-gradient(to top, ${color}, transparent)`
                            }}
                        />
                        <div
                            className="hidden md:block absolute inset-0"
                            style={{
                                background: `linear-gradient(to right, transparent 75%, ${color})`
                            }}
                        />

                        <div className="absolute inset-0 flex items-end justify-center pb-7 px-3">
                            <div className="flex flex-col items-center space-y-2">
                                <NetflixIcon sx={{ color: '#E50914', height: '15px' }} />
                                <img srcSet={logo}
                                    src={logo}
                                    alt={`${title} logo`}
                                    loading='lazy'
                                    className="w-auto h-auto object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Video Thumbnail Section */}
                <div className="relative flex-1 flex-col p-4 md:p-6 flex items-center justify-center">
                    <div className="group relative w-full max-w-2xl aspect-video rounded-lg cursor-pointer overflow-hidden border-solid border-2 border-white" >
                        <img srcSet={`${videoPhoto}`}
                            src={`${videoPhoto}`}
                            alt={videoUrl}
                            loading="lazy" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="text-center text-white">
                                <PlayCircleIcon sx={{ fontSize: 50 }} />
                            </div>
                        </div>
                    </div>
                    <div className='pt-2'>
                        <Button variant='contained' color='info' size='large' key={`Watch Now - ${title}`} disableElevation
                            sx={{
                                color: 'primary.dark',
                                '&:hover': {
                                    color: 'primary.main',
                                    backgroundColor: 'info.light'
                                }
                            }}>
                            <CustomText text={WATCH_NOW} />
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}
