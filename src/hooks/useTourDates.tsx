import { useQuery } from "@tanstack/react-query"
import { getToursAction } from "../api/get-tours.action"

export const useTourDates = () => {
    return useQuery({
        queryKey: ['tour'],
        queryFn: () => getToursAction(),
        staleTime: 1000 * 60 * 5,
        retry: false
    })
}
