import { Divider, Typography } from "@mui/material"

interface Props {
    title?: string;
    color?: string;
}
export const CustomDivider = ({ color, title }: Props) => {
    return (
        <Divider className="pb-5 text-2xl" sx={{
            borderColor: `${color ?? 'info.light'}`,
            "&::before, &::after": {
                borderColor: `${color ?? 'info.light'}`
            },
        }}>
            {!!title && (
                <Typography
                    variant="h5"
                    sx={{
                        color: color ?? 'info.light',
                        fontWeight: 'bold',
                    }}
                    className="font-bold text-2xl"
                >
                    {title}
                </Typography>
            )}
        </Divider>
    )
}
