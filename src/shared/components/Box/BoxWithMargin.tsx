import { Box } from "@mui/material"
import type { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    bgColor: string;
}

export const BoxWithMargin = ({ children, bgColor }: Props) => {
    return (
        <Box className="p-7 md:p-8 lg:p-9" sx={{ backgroundColor: `${bgColor}` }}>
            {children}
        </Box>
    )
}
