import { BoxWithMargin } from '../../shared/components/Box/BoxWithMargin';
import { CardMedia } from '../../shared/components/Card/CardMedia';
import { GroupButton } from '../../shared/components/GroupButton/GroupButton';
import { DialogVideo } from '../../shared/components/Dialog/DialogVideo';
import { useOpenVideoDialog } from '../../hooks/useOpenVideoDialog';
import { useThemeSwitcher } from '../../styles/ThemeSwitcherProvider';
import { useOpenLink } from '../../hooks/useOpenLink';
import { BannerImage } from '../../shared/components/Banner/BannerImage';
import { MusicVideosList } from '../../shared/components/ImageList/MusicVideosList';
import { ImagesList } from '../../shared/components/ImageList/ImagesList';
import { CustomDivider } from '../../shared/components/Divider/CustomDivider';
import type { AlbumNameKey } from '../../interfaces/music.interface';
import { Navigate, useParams } from 'react-router';
import { useAlbumEra } from '../../hooks/useAlbumEra';
import { useEffect } from 'react';

export const AlbumPage = () => {
    const { idAlbum } = useParams();

    const { data: shawnInfo, isError } = useAlbumEra(idAlbum as AlbumNameKey);
    const { handleCloseDialog, handleSongClick, openDialog, songData } = useOpenVideoDialog();
    const { setThemeName } = useThemeSwitcher();

    useEffect(() => {
        if (shawnInfo) {
            setThemeName(shawnInfo.albumKey);
        }
    }, [shawnInfo, setThemeName]);

    if (isError) return <Navigate to='/' />
    if (!shawnInfo) return <h1>Loading...</h1>

    return (
        <>
            <title>{shawnInfo.albumName + ' - The Album'}</title>
            <BannerImage mobilBanner={shawnInfo.bannerImages.mobilBanner} desktopBanner={shawnInfo.bannerImages.desktopBanner} />
            <BoxWithMargin bgColor='secondary.main'>
                <CustomDivider color='primary.main' title='The Album'></CustomDivider>
                <CardMedia albumInfo={shawnInfo} onSongClicked={handleSongClick} />
                <GroupButton services={shawnInfo.albumLink} onButtonClicked={useOpenLink} />
                <DialogVideo song={songData} openDialog={openDialog} closeDialog={handleCloseDialog} />
            </BoxWithMargin>

            <BoxWithMargin bgColor='primary.main'>
                <CustomDivider color='secondary.main' title='Videos'></CustomDivider>
                <MusicVideosList videosList={shawnInfo?.videosList} />
            </BoxWithMargin>

            {shawnInfo?.photoList &&
                (<BoxWithMargin bgColor='secondary.main'>
                    <CustomDivider color='primary.main' title='Photos'></CustomDivider>
                    <ImagesList photoList={shawnInfo?.photoList}></ImagesList>
                </BoxWithMargin>
                )}
        </>
    )
}
