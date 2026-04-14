import type { MusicInfo } from "./extraInfo.interface";

//Images
export interface MediaList {
    img: string;
    title: string;
}

export interface AlbumImages extends MediaList {
    subtitle?: string;
    root: string;
    extraInfo?: MusicInfo;
}

//Videos
export interface VideoList extends MediaList {
    link?: string;
}