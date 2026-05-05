import { useEffect, useState } from "react"
import { PHRASES } from "../../shared/data/Phrases";
import { CustomMessage } from "../../shared/components/CustomMessage/CustomMessage";
import { NOT_FOUND_MESSAGE } from "../../shared/data/Titles";

export const NotFoundPage = () => {

    const array = PHRASES;
    const notFound = NOT_FOUND_MESSAGE;
    const [title, setTitle] = useState(array[0]);

    useEffect(() => {
        document.title = 'Page Not Found';
        const randomIndex = Math.floor(Math.random() * array.length);
        setTitle(array[randomIndex])
    }, []);

    return (
        <CustomMessage title={title} subtitle={notFound} />
    )
}
