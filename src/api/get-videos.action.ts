import type { InfiniteVideos } from "../interfaces/infiniteVideos.interface";
import { ShawnData } from "../shared/data/ShawnData"

const albumData = ShawnData;

export const getVideosAction = async (pageParam: number = 1): Promise<InfiniteVideos> => {
    await new Promise((res) => setTimeout(res, 1000));

    const data = {
        videos: albumData.flatMap((album) => album.videosList),
        nextPage: 2,
        hasMore: false
    }
    return data;
}
