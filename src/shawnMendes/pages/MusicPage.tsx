import { useSearchParams } from "react-router"
import { Box, Chip, Stack, Typography } from "@mui/material"
import { CustomTitle } from "../../shared/components/Title/CustomTitle"
import { MUSIC_VALUES } from "../../shared/data/Values"
import { CustomDivider } from "../../shared/components/Divider/CustomDivider"
import { BoxWithMargin } from "../../shared/components/Box/BoxWithMargin"
import { useMusic } from "../../hooks/useMusic"
import { MUSIC_MESSAGE_ERROR, MUSIC_TITLE } from "../../shared/data/Titles"
import { AlbumList } from "../../shared/components/ImageList/AlbumList"
import type { MediaType } from "../../interfaces/extraInfo.interface"

export const MusicPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const typeMode = searchParams.get('type') || 'all';
    const { data: musicData, isError } = useMusic(typeMode as MediaType);

    const handleSearchParams = (value: string) => {
        searchParams.set('type', value);
        setSearchParams(searchParams);
    }

    return (
        <BoxWithMargin bgColor="secondary.light">
            <title>`${MUSIC_TITLE} - Shawn Mendes`</title>
            <CustomTitle title={MUSIC_TITLE} />
            <Stack
                direction='row'
                spacing={{ xs: 0.2, sm: 2, md: 3 }}
                useFlexGap
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                {MUSIC_VALUES.map((type) => (
                    <Chip label={type.title}
                        key={type.key}
                        variant={typeMode.toUpperCase() === type.key.toUpperCase() ? 'filled' : 'outlined'}
                        color="primary"
                        onClick={() => handleSearchParams(type.key)}
                        sx={{
                            transition: 'all 0.3s ease-in-out',
                            transform: 'scale(1)'
                        }} />
                ))}
            </Stack>
            <CustomDivider color="primary.main" />
            <br />
            {!musicData || isError || musicData.length === 0 && (
                <Box className="h-screen text-center">
                    <Typography variant="subtitle1" align="center" sx={{ color: 'primary.dark', fontWeight: 'bold' }}>
                        {MUSIC_MESSAGE_ERROR}
                    </Typography>
                </Box>
            )}

            {!isError && musicData && musicData.length > 0 && (
                <AlbumList photoList={musicData} showTitle={true} style='album' />
            )}
        </BoxWithMargin>
    )
}
