import type { MediaList, VideoList } from "./images.Interface";

//types
export type PlatformKey = 'spotify' | 'amazonMusic' | 'appleMusic' | 'otherMusic';
export type PlatformName = 'Spotify' | 'Amazon Music' | 'Apple Music' | 'More';
export type AlbumNameKey = 'shawnAlbum' | 'wonderAlbum' | 'shawnMendesAlbum' | 'illuminateAlbum' | 'handwrittenAlbum';

//Music
export interface Songs {
    track: number;
    name: string;
    singer: string;
    time?: string;
    url?: string;
}

export interface BannerImg {
    desktopBanner: string;
    mobilBanner: string;
}

export interface StreamingServices {
    key: PlatformKey;
    platform: PlatformName;
    link: string;
}

export interface Album {
    albumName: string;
    albumSinger: string;
    albumCover: string;
    albumTracks: Songs[];
}

export interface AlbumInfo extends Album {
    albumKey: AlbumNameKey;
    bannerImages: BannerImg;
    albumLink: StreamingServices[];
    videosList: VideoList[];
    photoList?: MediaList[] | null;
}