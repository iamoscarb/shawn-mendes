
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import type { FC } from 'react';

interface Songs {
    track: number;
    name: string;
    singer: string;
    time?: string;
    url: string;
}

interface Props {
    song: Songs;
    openDialog: boolean;
    closeDialog: () => void;
}
export const DialogVideo: FC<Props> = ({ song, openDialog, closeDialog }) => {
    return (
        <Dialog fullWidth maxWidth='md' open={openDialog} onClose={closeDialog}
            sx={{
                '& .MuiPaper-root': {
                    backgroundColor: 'transparent',
                    boxShadow: 'none'
                }
            }}>
            <DialogContent className='relative p-0'>
                <div className="relative w-full aspect-video">
                    <iframe className='absolute inset-0 w-full h-full rounded-lg'
                        src={`https://www.youtube.com/embed/${song.url}`}
                        title={`${song.singer} - ${song.name}`}
                        allow="autoplay; fullscreen" allowFullScreen></iframe>
                </div>
            </DialogContent>
        </Dialog>
    )
}
