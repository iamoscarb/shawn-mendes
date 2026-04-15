import { useState } from "react";

export const useOpenVideoDialog = () => {
    let song = { track: 0, name: '', singer: '', url: '' };

    const [songData, setSongData] = useState(song)
    const [openDialog, setOpenDialog] = useState(false)

    const handleSongClick = async (song?: any) => {
        setSongData(song);
        setOpenDialog(true);
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

    return {
        songData,
        openDialog,

        handleSongClick,
        handleCloseDialog
    }
}
