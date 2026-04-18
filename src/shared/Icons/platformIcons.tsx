import type { JSX } from "react";
import { AmazonMusicIcon } from "./AmazonMusicIcon";
import { AppleMusicIcon } from "./AppleMusic";
import { SpotifyIcon } from "./SpotifyIcon";
import { Typography } from "@mui/material";

export const platformIcons: Record<string, JSX.Element> = {
    spotify: <SpotifyIcon className="w-30" sx={{ color: 'primary.dark' }} />,
    amazonMusic: <AmazonMusicIcon className="w-30" sx={{ color: 'primary.dark' }} />,
    appleMusic: <AppleMusicIcon className="w-30" sx={{ color: 'primary.dark' }} />,
    otherMusic: <Typography
        variant="h5"
        sx={{
            color: 'primary.dark',
            fontWeight: 'bold',
        }}
        className="font-bold text-2xl"
    >
        MORE
    </Typography>
}