import { IconButton, Popover } from "@mui/material"
import InfoIcon from '@mui/icons-material/Info'
import { useState, type PropsWithChildren } from "react"

interface MediaData {
    mediaName: string;
    mediaYear: number;
    mediaTag: string;
    mediaTime: string;
    mediaSynopsis: string;
}

interface Props extends PropsWithChildren {
    mediaData: MediaData
}
export const InfoMedia = ({ children, mediaData }: Props) => {
    const [openMessage, setOpenMessage] = useState<HTMLElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setOpenMessage(event.currentTarget);
    }

    const handleClose = () => {
        setOpenMessage(null);
    }

    const open = Boolean(openMessage);

    return (
        <div className="relative w-full shrink-0">
            {children}
            <div className="absolute inset-0 flex items-start justify-end">
                <div className="flex flex-col items-end">
                    <IconButton aria-label="info" size="large" color="primary" onClick={handleClick}>
                        <InfoIcon fontSize="large" />
                    </IconButton>

                    <Popover id='documentary' open={open} onClose={handleClose} anchorEl={openMessage}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}>
                        <div className="p-3 text-neutral-700">
                            <h1 className="font-lato font-bold text-lg text-center">{mediaData.mediaName}</h1>
                            <div className="flex flex-row justify-between py-2">
                                <p className="font-lato font-light text-base">{mediaData.mediaYear}</p>
                                <p className="font-lato font-light text-base">{mediaData.mediaTag}</p>
                                <p className="font-lato font-light text-base">{mediaData.mediaTime}</p>
                            </div>
                            <div className="w-60 pb-2">
                                <p className='text-justify'>
                                    {mediaData.mediaSynopsis}
                                </p>
                            </div>

                        </div>

                    </Popover>


                </div>
            </div>
        </div>
    )
}
