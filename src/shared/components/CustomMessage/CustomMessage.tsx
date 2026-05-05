import { Box } from "@mui/material";

interface Props {
    title: string;
    subtitle: string;
}

export const CustomMessage = ({ title, subtitle }: Props) => {
    return (
        <Box sx={{ backgroundColor: 'secondary.main' }} className="h-dvh text-center px-10 content-center">
            <h1 className="text-5xl font-bold text-white font-shawnMendes">{title.toUpperCase()}</h1>
            <p className="text-2xl font-light text-white pt-3 font-lato">{subtitle}</p>
        </Box>
    )
}
