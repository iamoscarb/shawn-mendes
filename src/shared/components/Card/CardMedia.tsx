import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import type { FC } from "react";
import type { Album, Songs } from '../../../interfaces/music.interface';

interface Props {
    albumInfo: Album;
    onSongClicked: (song: Songs) => void;
}

export const CardMedia: FC<Props> = ({ albumInfo, onSongClicked }) => {
    const { albumName, albumSinger, albumCover, albumTracks } = albumInfo;
    return (
        <Card className="flex lg:flex-row md:flex-row sm:flex-col max-sm:flex-col"
            sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                border: 'none'
            }}>
            <img
                className="w-full h-full md:w-80 md:h-80 rounded-lg"
                src={albumCover}
                alt={albumName}
            />
            <Box className="flex flex-col w-full pt-2 md:pl-2 md:pt-0">
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <h1 className="text-center text-2xl font-medium md:text-left text-[color:var(--mui-palette-text-primary)] bt-0">{albumName}</h1>
                    <h2 className="text-center text-[color:var(--mui-palette-text-primary)] mb-1 md:text-left">{albumSinger}</h2>
                    <div className="songs-card w-full max-h-68 md:max-h-55 overflow-y-auto">
                        {
                            albumTracks.map((song) => (
                                <div className="group flex items-center justify-between p-2 rounded-md hover:bg-gray-400/20 transition-colors cursor-default select-none cursor-pointer" key={song.track}
                                    onClick={() => onSongClicked(song)}>

                                    <div className="flex items-center gap-4">
                                        <div className="w-5 flex justify-center items-center">
                                            <span className="text-gray-500 text-sm group-hover:hidden">{song.track}</span>

                                            <svg className="hidden group-hover:block w-3 h-3 text-[color:var(--mui-palette-text-primary)] fill-current" viewBox="0 0 24 24">
                                                <path d="M7 6v12l10-6z"></path>
                                            </svg>
                                        </div>

                                        <div className="flex flex-col text-left">
                                            <h3 className="text-[color:var(--mui-palette-text-primary)] font-medium leading-tight text-[15px] w-70">{song.name}</h3>
                                            <p className="text-[13px] text-gray-700 group-hover:text-[color:var(--mui-palette-text-primary)]">{song.singer}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <span className="text-gray-400 text-sm font-light w-10 text-right">{song.time}</span>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </CardContent>
            </Box>
        </Card>
    );
}
