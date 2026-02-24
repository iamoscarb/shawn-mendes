import { ImageList, ImageListItem, ImageListItemBar, useMediaQuery, useTheme } from "@mui/material"
import { useState } from "react";

interface VideoList {
    title: string;
    img: string;
}

interface Props {
    videosList: VideoList[];
}



export const MusicVideosList = ({ videosList }: Props) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const getCols = () => {
        if (isMobile) return 1;
        if (isTablet) return 2;
        return 3;
    };

    return (
        <ImageList cols={getCols()} gap={12} sx={
            {
                width: '100%', height: 'auto'
            }}>
            {videosList.map((item) => (
                <ImageListItem key={item.img}>
                    <img srcSet={item.img} src={item.img} alt={item.title} loading="lazy" className="rounded-md" />
                    <ImageListItemBar title={item.title} position="below" className="text-white" />
                </ImageListItem>
            ))}
        </ImageList>
    )
}
