import { Box, Typography } from "@mui/material"
import { CustomTitle } from "../../shared/components/Title/CustomTitle"
import { CustomDivider } from "../../shared/components/Divider/CustomDivider"
import { BoxWithMargin } from "../../shared/components/Box/BoxWithMargin"
import { LOADING_MESSAGE, MUSIC_MESSAGE_ERROR, MUSIC_TITLE } from "../../shared/data/Titles"
import { AlbumList } from "../../shared/components/ImageList/AlbumList"
import { useAdvancedFilters } from "../../hooks/useAdvancedFilters"
import { AdvancedFilters } from "../../shared/components/AdvancedFilters/AdvancedFilters"

export const MusicPage = () => {
    const { typeMode, musicData, isError, isLoading, handleSearchParams } = useAdvancedFilters();

    return (
        <BoxWithMargin bgColor="secondary.light">
            <title>{`${MUSIC_TITLE} - Shawn Mendes`}</title>
            <CustomTitle title={MUSIC_TITLE} />
            <AdvancedFilters typeMode={typeMode} handleSearchParams={handleSearchParams} />
            <CustomDivider color="primary.main" />
            <br />
            {
                isLoading && (
                    <Box className="h-screen text-center">
                        <Typography variant="subtitle1" align="center" sx={{ color: 'primary.dark', fontWeight: 'bold' }}>
                            {LOADING_MESSAGE}
                        </Typography>
                    </Box>
                )
            }
            {!musicData || isError || musicData.length === 0 && (
                <Box className="h-screen text-center">
                    <Typography variant="subtitle1" align="center" sx={{ color: 'primary.dark', fontWeight: 'bold' }}>
                        {MUSIC_MESSAGE_ERROR}
                    </Typography>
                </Box>
            )}

            {!isError && musicData && musicData.length > 0 && (
                <AlbumList photoList={musicData} showTitle={true} showInfo={true} style='album' />
            )}
        </BoxWithMargin>
    )
}
