
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import type { FC } from 'react';
import type { Songs } from '../../../interfaces/music.interface';
import { YOUTUBE_LINK } from '../../data/Links';

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
                        src={`${YOUTUBE_LINK}/${song.url}?autoplay=1`}
                        title={`${song.singer} - ${song.name}`}
                        allow="autoplay; fullscreen" allowFullScreen></iframe>
                </div>
            </DialogContent>
        </Dialog>
    )
}
