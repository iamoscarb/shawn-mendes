import type { MediaType } from "../interfaces/extraInfo.interface";
import type { AlbumImages } from "../interfaces/images.Interface";
import { ShawnData } from "../shared/data/ShawnData"

const musicData = ShawnData;

export const getMusicAction = async (type: MediaType): Promise<AlbumImages[]> => {
    const music = musicData
        .filter((item) => {
            return type.toLowerCase() === 'all' || item.releasedType.toUpperCase() === type.toUpperCase()
        })
        .sort((a, b) => b.albumYear - a.albumYear)
        .map((music) => {
            return {
                img: music.albumCover,
                title: music.albumName,
                subtitle: music.albumSubtitle,
                root: `/album/${music.albumKey}`,
                extraInfo: {
                    releasedYear: music.albumYear,
                    releasedType: music.releasedType as MediaType
                }
            }
        });
    return music
}
