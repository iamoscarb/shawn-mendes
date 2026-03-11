//Music
export interface Songs {
    track: number;
    name: string;
    singer: string;
    time?: string;
    url?: string;
}

export interface Album {
    albumName: string;
    albumSinger: string;
    albumCover: string;
    albumTracks: Songs[];
}