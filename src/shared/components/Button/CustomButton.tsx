import { Button } from "@mui/material"
import { useGetColors } from "./hooks/useGetColors";

interface Props {
    text: string;
    color: string;
    icon?: any;
    disabled?: boolean;
    handleOnClick?: () => void;
}

const { getInvestedColor, getColor } = useGetColors();

export const CustomButton = ({ text, color, icon, disabled = false, handleOnClick }: Props) => {
    return (
        <Button variant="outlined"
            startIcon={icon}
            onClick={handleOnClick}
            disabled={disabled}
            sx={{
                borderRadius: '20px',
                border: 2,
                borderColor: getColor(color),
                color: getColor(color),
                fontFamily: 'Lato',
                '&:hover': {
                    backgroundColor: getColor(color),
                    color: getInvestedColor(color)
                }
            }} >
            {text}
        </Button>
    )
}
