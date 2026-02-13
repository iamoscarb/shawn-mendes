import type { JSX } from "react";
import { AmazonMusicIcon } from "./AmazonMusicIcon";
import { AppleMusicIcon } from "./AppleMusic";
import { SpotifyIcon } from "./SpotifyIcon";

export const platformIcons: Record<string, JSX.Element> = {
    spotify: <SpotifyIcon className="w-30" />,
    amazonMusic: <AmazonMusicIcon className="w-30" />,
    appleMusic: <AppleMusicIcon className="w-30" />
}