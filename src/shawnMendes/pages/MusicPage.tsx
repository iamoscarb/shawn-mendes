import { Chip, Stack } from "@mui/material"
import { CustomTitle } from "../../shared/components/Title/CustomTitle"
import { MUSIC_VALUES } from "../../shared/data/Values"
import { useSearchParams } from "react-router"
import { CustomDivider } from "../../shared/components/Divider/CustomDivider"
import { BoxWithMargin } from "../../shared/components/Box/BoxWithMargin"

export const MusicPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const typeMode = searchParams.get('type') || 'all';

    const handleSearchParams = (value: string) => {
        searchParams.set('type', value);
        setSearchParams(searchParams);
    }

    return (
        <BoxWithMargin bgColor="secondaty.light">
            <title>Music - Shawn Mendes</title>
            <CustomTitle title="Music" />
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
                        onClick={() => handleSearchParams(type.key)} />
                ))}
            </Stack>
            <CustomDivider />
            <br />
        </BoxWithMargin>
    )
}
