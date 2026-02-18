import { Box, IconButton } from "@mui/material"
import { SocialMediaIcons } from "../../Icons/SocialMediaIcons"

const socialMediaList = [
    { nameSocial: 'facebook', url: 'facebook.com' },
    { nameSocial: 'instagram', url: 'instagram.com' },
    { nameSocial: 'x', url: 'x.com' },
    { nameSocial: 'youtube', url: 'youtube.com' },
    { nameSocial: 'tiktok', url: 'tiktok.com' },
]

export const Footer = () => {
    return (
        <Box className='grid grid-flow-row flex justify-center p-5' sx={{ bgcolor: 'primary.main' }}>
            <div className="grid grid-flow-col gap-3">
                {
                    socialMediaList.map((social) => (
                        <IconButton aria-label={social.nameSocial}>
                            {SocialMediaIcons[social.nameSocial]}
                        </IconButton>
                    ))
                }
            </div>
            <div className="pt-3 flex justify-center">
                <a className="text-center" href='https://www.shawnmendesofficial.com/'>&copy; 2026 Shawn Mendes</a>
            </div>
        </Box>
    )
}
