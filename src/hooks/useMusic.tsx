import { useQuery } from "@tanstack/react-query"
import { getMusicAction } from "../api/get-music.action"
import type { MediaType } from "../interfaces/extraInfo.interface"

export const useMusic = (type: MediaType) => {
    return useQuery({
        queryKey: ['music', { type }],
        queryFn: () => getMusicAction(type),
        staleTime: 1000 * 60 * 5,
        retry: false
    })
}
