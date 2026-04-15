import type { VideoList } from "../interfaces/images.Interface";
import { ShawnData } from "../shared/data/ShawnData"

const albumData = ShawnData;

export const getVideosAction = async (): Promise<VideoList[] | undefined> => {
    await new Promise((res) => setTimeout(res, 1000));

    const data = albumData.flatMap((album) => album.videosList);

    return data;

}
