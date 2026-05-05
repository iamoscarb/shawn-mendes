import { CustomMessage } from "../../shared/components/CustomMessage/CustomMessage"
import { ERROR_MESSAGE, ERROR_TITLE } from "../../shared/data/Titles"

export const ErrorPage = () => {
    const title = ERROR_TITLE;
    const subtitle = ERROR_MESSAGE;
    return (
        <CustomMessage title={title} subtitle={subtitle} />
    )
}
