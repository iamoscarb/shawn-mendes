import { Typography } from "@mui/material"

interface Props {
    title: string;
    color?: string;
}
export const CustomTitle = ({ title, color = 'primary.main' }: Props) => {
    return (
        <Typography variant="h3" align="center" className="pb-3 font-black" sx={{ color: color, fontWeight: 'bold' }}>
            {title}
        </Typography>
    )
}
