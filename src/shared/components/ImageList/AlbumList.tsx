import { alpha, Box, ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import { Link } from 'react-router';
import { useNumColsImgList, type configType } from "../../../hooks/useNumColsImgList";
import type { AlbumImages } from "../../../interfaces/images.Interface";


interface Props {
    photoList: AlbumImages[];
    style: configType;
    showTitle?: boolean;
    showInfo?: boolean;
}

export const AlbumList = ({ photoList, style, showTitle = false, showInfo = false }: Props) => {

    const { getCols } = useNumColsImgList(style);

    return (
        <ImageList sx={{ width: '100%', height: 'auto' }} variant="standard" cols={getCols()} gap={15}>
            {photoList.map((item) => (
                <ImageListItem key={item.img}>
                    <div className="overflow-hidden rounded-lg">
                        <Link to={item.root}>
                            <img
                                src={item.img} alt={item.title} loading="lazy"
                                className="transition duration-300 ease-in-out hover:scale-110" />
                        </Link>
                    </div>

                    {showTitle && (
                        <ImageListItemBar
                            title={<div className="w-full flex justify-start">
                                <h2 className="font-lato text-lg">{item.title}
                                    {item?.subtitle && (<span className="font-lato font-normal text-base italic">{` ${item.subtitle}`}</span>)}
                                </h2>
                            </div>
                            }
                            subtitle={showInfo && item?.extraInfo?.releasedType && item?.extraInfo?.releasedYear && (
                                <Box className="w-full flex justify-start text-center" sx={(theme) => ({ color: alpha(theme.palette.primary.main, 0.7), borderColor: alpha(theme.palette.primary.main, 0.5) })}>
                                    <p className="w-auto rounded-sm border-2 border-solid py-1 px-2 mr-3 font-lato">{item.extraInfo.releasedYear}</p>
                                    <p className="w-auto rounded-sm border-2 border-solid py-1 px-2 font-lato">{item.extraInfo.releasedType.toUpperCase()}</p>
                                </Box>
                            )}
                            position="below" sx={{ color: 'primary.main', fontWeight: 'bold' }} />
                    )}
                </ImageListItem>
            ))}
        </ImageList>
    )
}
