import type { JSX } from "@emotion/react/jsx-runtime";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TiktokIcon from "./TikTokIcon";

export const SocialMediaIcons: Record<string, JSX.Element> = {
    facebook: <FacebookIcon className='text-white' />,
    instagram: <InstagramIcon className='text-white' />,
    x: <XIcon className='text-white' />,
    youtube: <YouTubeIcon className='text-white' />,
    tiktok: <TiktokIcon sx={{ color: 'white' }} />
}