import type { JSX } from "react";
import { AmazonMusicIcon } from "./AmazonMusicIcon";
import { AppleMusicIcon } from "./AppleMusic";
import { SpotifyIcon } from "./SpotifyIcon";
import { Typography } from "@mui/material";

export const platformIcons: Record<string, JSX.Element> = {
    spotify: <SpotifyIcon className="w-30" sx={{ color: 'inherit' }} />,
    amazonMusic: <AmazonMusicIcon className="w-30" sx={{ color: 'inherit' }} />,
    appleMusic: <AppleMusicIcon className="w-30" sx={{ color: 'inherit' }} />,
    otherMusic: <Typography
        variant="h5"
        sx={{
            color: 'inherit',
            fontWeight: 'bold',
        }}
        className="font-bold text-2xl"
    >
        MORE
    </Typography>
}