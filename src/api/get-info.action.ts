import { ShawnData } from "../shared/data/ShawnData";

const albumData = ShawnData;

export const getInfoAction = async (name: string) => {
    await new Promise((res) => setTimeout(res, 1000));

    return albumData.find((album) =>
        album.albumName.toUpperCase() === name.toUpperCase()
    );
}