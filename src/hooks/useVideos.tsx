import { useQuery } from "@tanstack/react-query"
import { getVideosAction } from "../api/get-videos.action"

export const useVideos = () => {
    return useQuery({
        queryKey: ['videos'],
        queryFn: () => getVideosAction(),
        staleTime: 1000 * 60 * 5,
        retry: false
    })
}
