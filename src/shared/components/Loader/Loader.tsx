import { CircularProgress, Dialog } from "@mui/material"

interface Props {
    open: boolean
}

export const Loader = ({ open }: Props) => {
    return (
        <Dialog fullScreen open={open} maxWidth='md' sx={{
            '& .MuiPaper-root': {
                backgroundColor: 'white',
                boxShadow: 'none'
            }
        }}>
            <div className="flex items-center justify-center h-screen">
                <CircularProgress aria-label="Loading…" />
            </div>
        </Dialog>
    )
}
