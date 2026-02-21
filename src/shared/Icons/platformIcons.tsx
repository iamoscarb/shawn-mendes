import type { JSX } from "react";
import { AmazonMusicIcon } from "./AmazonMusicIcon";
import { AppleMusicIcon } from "./AppleMusic";
import { SpotifyIcon } from "./SpotifyIcon";

export const platformIcons: Record<string, JSX.Element> = {
    spotify: <SpotifyIcon className="w-30" fill={'primary.main'} />,
    amazonMusic: <AmazonMusicIcon className="w-30" fill={'primary.main'} />,
    appleMusic: <AppleMusicIcon className="w-30" fill={'primary.main'} />,
    otherMusic: <h2 className="font-bold">MORE</h2>
}