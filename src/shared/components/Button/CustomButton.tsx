import { Button } from "@mui/material"
import { useGetColors } from "./hooks/useGetColors";

interface Props {
    text: string;
    color: string;
    icon?: any
}

const { getInvestedColor, getColor } = useGetColors();

export const CustomButton = ({ text, color, icon }: Props) => {
    return (
        <Button variant="outlined"
            startIcon={icon}
            sx={{
                borderRadius: '20px',
                border: 2,
                borderColor: getColor(color),
                color: getColor(color),
                '&:hover': {
                    backgroundColor: getColor(color),
                    color: getInvestedColor(color)
                }
            }} >
            {text}
        </Button>
    )
}
