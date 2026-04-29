import { useSearchParams } from "react-router"
import { useMusic } from "./useMusic";
import type { MediaType } from "../interfaces/extraInfo.interface";

export const useAdvancedFilters = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const typeMode = searchParams.get('type') || 'all';
    const { data: musicData, isError, isLoading } = useMusic(typeMode as MediaType);

    const handleSearchParams = (value: string) => {
        searchParams.set('type', value);
        setSearchParams(searchParams);
    }

    return {
        typeMode,
        musicData,
        isError,
        isLoading,

        handleSearchParams
    }
}
