import { Box, IconButton } from "@mui/material"
import { SocialMediaIcons } from "../../Icons/SocialMediaIcons"
import { useOpenLink } from "../../../hooks/useOpenLink"
import { socialMediaList } from "../../data/SocialMedia"

export const Footer = () => {
    return (
        <Box className='grid grid-flow-row justify-center p-5' sx={{ bgcolor: 'primary.main' }}>
            <div className="grid grid-flow-col gap-3">
                {
                    socialMediaList.map((social) => (
                        <IconButton aria-label={social.nameSocial} key={social.nameSocial}
                            onClick={() => useOpenLink(social.url)}>
                            {SocialMediaIcons[social.nameSocial]}
                        </IconButton>
                    ))
                }
            </div>
            <div className="pt-3 flex justify-center">
                <a className="text-center text-white" href='https://www.shawnmendesofficial.com/'>&copy; 2026 Shawn Mendes</a>
            </div>
        </Box>
    )
}
