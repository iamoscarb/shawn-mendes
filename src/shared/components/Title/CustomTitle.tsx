import { Typography } from "@mui/material"

interface Props {
    title: string;
    color?: string;
}
export const CustomTitle = ({ title, color = 'primary.main' }: Props) => {
    return (
        <Typography variant="h3" align="center" className="font-black" sx={{ color: color, fontWeight: 'bold', fontFamily: 'shawnMendesRegular' }}>
            {title}
        </Typography>
    )
}
