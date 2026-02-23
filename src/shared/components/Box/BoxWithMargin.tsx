import { Box } from "@mui/material"

export const BoxWithMargin = ({ children }: any) => {
    return (
        <Box className="p-7 md:p-8 lg:p-9" sx={{ backgroundColor: 'secondary.main' }}>
            {children}
        </Box>
    )
}
