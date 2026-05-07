import type { VideoList } from "./images.Interface";

export interface InfiniteVideos {
    videos: VideoList[];
    nextPage: number;
    hasMore: boolean;
}