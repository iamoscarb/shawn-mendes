import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { PHRASES } from "../../shared/data/Phrases";

export const NotFoundPage = () => {

    const array = PHRASES;
    const [title, setTitle] = useState(array[0])

    useEffect(() => {
        document.title = 'Page Not Found';
        const randomIndex = Math.floor(Math.random() * array.length);
        setTitle(array[randomIndex])
    }, []);

    return (
        <Box sx={{ backgroundColor: 'secondary.main' }} className="h-dvh text-center px-10 content-center">
            <h1 className="text-3xl font-bold text-white">{title.toUpperCase()}</h1>
            <p className="text-2xl font-light text-white pt-3">The page you requested does not exist or isn't avaliable</p>
        </Box>
    )
}
