import { Button } from "@mui/material"
import { useGetColors } from "./hooks/useGetColors";

interface Props {
    text: string;
    color: string;
}

const { getInvestedColor, getColor } = useGetColors();

export const CustomButton = ({ text, color }: Props) => {
    return (
        <Button variant="outlined"
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
