import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { Link } from 'react-router';
import { useNumColsImgList, type configType } from "../../../hooks/useNumColsImgList";
import type { AlbumImages } from "../../../interfaces/images.Interface";


interface Props {
    photoList: AlbumImages[];
    style: configType;
    showTitle?: boolean;
}

export const AlbumList = ({ photoList, showTitle, style }: Props) => {

    const { getCols } = useNumColsImgList(style);

    return (
        <ImageList sx={{ width: '100%', height: 'auto' }} variant="standard" cols={getCols()} gap={15}>
            {photoList.map((item) => (
                <ImageListItem key={item.img} component={Link} to={item.root}>
                    <div className="overflow-hidden rounded-lg">
                        <img
                            src={item.img} alt={item.title} loading="lazy"
                            className="transition duration-300 ease-in-out hover:scale-110" />
                    </div>

                    {showTitle && (
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item?.subtitle}
                            position="below" sx={{ color: 'primary.main', fontWeight: 'bold' }} />
                    )}
                </ImageListItem>
            ))}
        </ImageList>
    )
}
