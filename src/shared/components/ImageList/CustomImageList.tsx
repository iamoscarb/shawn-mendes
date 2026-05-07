import { ImageList } from "@mui/material"
import { useNumColsImgList, type configType } from "../../../hooks/useNumColsImgList";

interface Props {
    children: any;
    type: configType;
}
export const CustomImageList = ({ children, type }: Props) => {
    const { getCols } = useNumColsImgList(type);

    return (
        <ImageList cols={getCols()} gap={12} sx={{ width: '100%', height: 'auto' }}>
            {children}
        </ImageList>
    )
}
