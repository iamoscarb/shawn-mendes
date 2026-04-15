import { useQuery } from "@tanstack/react-query"
import { getInfoAction } from "../api/get-info.action"
import type { AlbumNameKey } from "../interfaces/music.interface"

export const useAlbumEra = (idAlbum: AlbumNameKey) => {
    return useQuery({
        queryKey: ['album', { idAlbum }],
        queryFn: () => getInfoAction(idAlbum),
        staleTime: 1000 * 60 * 5,
        retry: false
    })
}
