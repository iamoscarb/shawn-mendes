import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { Link } from 'react-router';
import { useNumColsImgList, type configType } from "../../../hooks/useNumColsImgList";
interface Images {
    img: string;
    title: string;
    subtitle?: string;
    root: string;
}

interface Props {
    photoList: Images[];
    style: configType;
    showTitle?: boolean;
}

export const AlbumList = ({ photoList, showTitle, style }: Props) => {

    const { getCols } = useNumColsImgList(style);

    return (
        <ImageList sx={{ width: '100%', height: 'auto' }} variant="standard" cols={getCols()} gap={10}>
            {photoList.map((item) => (
                <ImageListItem key={item.img} component={Link} to={item.root}>
                    <img
                        srcSet={item.img}
                        src={item.img} alt={item.title} loading="lazy"
                        className='rounded-lg' />
                    {showTitle && (
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item?.subtitle}
                            position="below" />
                    )}
                </ImageListItem>
            ))}
        </ImageList>
    )
}
