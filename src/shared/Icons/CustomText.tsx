import { Typography } from '@mui/material'

interface Props {
    text: string
}
export const CustomText = ({ text }: Props) => {
    return (
        <Typography
            variant="h5"
            sx={{
                color: 'inherit',
                fontWeight: 'bold',
                fontFamily: 'Lato'
            }}
            className="font-bold text-2xl"
        >
            {text.toUpperCase()}
        </Typography>
    )
}
