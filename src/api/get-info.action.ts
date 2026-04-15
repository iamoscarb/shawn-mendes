import type { AlbumNameKey } from "../interfaces/music.interface";
import { ShawnData } from "../shared/data/ShawnData";

const albumData = ShawnData;

export const getInfoAction = async (idAlbum: AlbumNameKey) => {
    await new Promise((res) => setTimeout(res, 1000));

    const album = albumData.find((album) =>
        album.albumKey.toUpperCase() === idAlbum.toUpperCase()
    );

    if (!album) {
        throw new Error("404 not found");
    }

    return album;
}