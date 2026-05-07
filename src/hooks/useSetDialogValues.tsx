import type { VideoList } from "../interfaces/images.Interface"

export const useSetDialogValues = (videoList: VideoList) => {
    return {
        track: 0,
        name: videoList.title,
        singer: 'Shawn Mendes',
        url: videoList.link
    }
}
