import { useInfiniteQuery } from "@tanstack/react-query"
import { getVideosAction } from "../api/get-videos.action"

export const useVideos = () => {
    return useInfiniteQuery({
        queryKey: ['videos'],
        queryFn: ({ pageParam = 1 }) => getVideosAction(pageParam),
        getNextPageParam: (lastPage, pages) => {
            return lastPage.nextPage || (lastPage.hasMore ? pages.length + 1 : undefined)
        },
        initialPageParam: 1,
        staleTime: 1000 * 60 * 5,
        retry: false
    })
}
