import type { InfiniteVideos } from "../interfaces/infiniteVideos.interface";
import { ShawnData } from "../shared/data/ShawnData"

const albumData = ShawnData;

export const getVideosAction = async (pageParam: number = 1): Promise<InfiniteVideos> => {
    await new Promise((res) => setTimeout(res, 1000));
    const LIMIT = 10;
    const allVideos = albumData.flatMap((album) => album.videosList)
    const start = (pageParam - 1) * LIMIT;
    const end = start + LIMIT;
    const videos = allVideos.slice(start, end);
    const hasMore = end < allVideos.length;

    return {
        videos,
        nextPage: hasMore ? pageParam + 1 : null,
        hasMore: hasMore
    }
}
