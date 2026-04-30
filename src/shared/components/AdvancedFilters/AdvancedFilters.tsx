import { Chip, IconButton, Stack } from "@mui/material"
import TuneIcon from '@mui/icons-material/Tune';
import { MUSIC_VALUES } from "../../data/Values";

interface Props {
    typeMode: string,
    handleSearchParams: (value: string) => void
}
export const AdvancedFilters = ({ typeMode, handleSearchParams }: Props) => {

    return (
        <>
            <IconButton aria-label="filter" size="medium" sx={{
                backgroundColor: 'primary.main',
                color: 'info.light',
                display: { xs: 'flex', sm: 'none' },
                '&:hover': {
                    backgroundColor: 'info.main',
                    color: 'primary.main'
                }
            }}>
                <TuneIcon fontSize='inherit' />
            </IconButton>
            <Stack
                direction='row'
                spacing={{ xs: 1, sm: 2, md: 3 }}
                useFlexGap
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: 'wrap',
                    display: { xs: 'none', sm: 'flex' }
                }}>
                {MUSIC_VALUES.map((type) => (
                    <Chip label={type.title}
                        key={type.key}
                        variant={typeMode.toUpperCase() === type.key.toUpperCase() ? 'filled' : 'outlined'}
                        color="primary"
                        onClick={() => handleSearchParams(type.key)}
                        sx={{
                            transition: 'all 0.3s ease-in-out',
                            transform: 'scale(1)',
                            fontFamily: 'Lato'
                        }} />
                ))}
            </Stack>
        </>
    )
}
