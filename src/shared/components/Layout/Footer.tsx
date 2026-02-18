import { Box } from "@mui/material"

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
    return (
        <Box className='grid grid-flow-col flex justify-center p-5' sx={{ bgcolor: 'primary.main' }}>
            <div className="grid grid-flow-col gap-3">
                <FacebookIcon />
                <InstagramIcon />
                <XIcon />
                <YouTubeIcon />
            </div>
        </Box>
    )
}
