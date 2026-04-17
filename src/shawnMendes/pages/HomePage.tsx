import { useThemeSwitcher } from '../../styles/ThemeSwitcherProvider';
import { BannerImage } from '../../shared/components/Banner/BannerImage';
import { BoxWithMargin } from '../../shared/components/Box/BoxWithMargin';
import { CustomDivider } from '../../shared/components/Divider/CustomDivider';
import { AlbumList } from '../../shared/components/ImageList/AlbumList';
import type { AlbumImages } from '../../interfaces/images.Interface';
import { MusicVideosList } from '../../shared/components/ImageList/MusicVideosList';
import { useVideos } from '../../hooks/useVideos';
import { useTourDates } from '../../hooks/useTourDates';
import { TourTable } from '../../shared/components/TourTable/TourTable';
import { Typography } from '@mui/material';
import { MUSIC_TITLE, TOUR_MESSAGE, VIDEOS_TITLE, WORLD_TOUR_TITLE } from '../../shared/data/Titles';

const albums: AlbumImages[] = [
    { title: 'Shawn', img: 'https://m.media-amazon.com/images/I/71ewAN10xmL._UF1000,1000_QL80_.jpg', root: '/album/shawnAlbum' },
    { title: 'Wonder', img: 'https://m.media-amazon.com/images/I/71Q9an5gVGS._UF1000,1000_QL80_.jpg', root: '/album/wonder' },
    { title: 'Shawn Mendes', img: 'https://m.media-amazon.com/images/I/A16Tg1LfILL._UF1000,1000_QL80_.jpg', root: '/album/shawn-mendes' },
    { title: 'Illuminate', img: 'https://m.media-amazon.com/images/I/81IGZPcWxmL._UF1000,1000_QL80_.jpg', root: '/album/illuminate' },
    { title: 'Handwritten', img: 'https://m.media-amazon.com/images/I/71Cl9FTmDEL._UF1000,1000_QL80_.jpg', root: '/album/handwritten' }
]

export const HomePage = () => {

    const { setThemeName } = useThemeSwitcher();
    const { data: videosInfo, isError: videosError } = useVideos();
    const { data: tourInfo, isError: tourError } = useTourDates();

    setThemeName('home');

    return (
        <>
            <BannerImage mobilBanner='banners/shawn-home-hero-desktop.webp' desktopBanner='banners/shawn-home-hero-desktop.webp' />
            <BoxWithMargin bgColor='secondary.main'>
                <CustomDivider color='primary.dark' title={MUSIC_TITLE}></CustomDivider>
                <AlbumList photoList={albums} showTitle={true} style='album'></AlbumList>
            </BoxWithMargin>

            {videosInfo && !videosError && videosInfo.length > 0 && (
                <BoxWithMargin bgColor='primary.main'>
                    <CustomDivider color='secondary.light' title={VIDEOS_TITLE}></CustomDivider>
                    <MusicVideosList videosList={videosInfo || []} />
                </BoxWithMargin>
            )}

            <BoxWithMargin bgColor='secondary.main'>
                <CustomDivider color='primary.dark' title={`${WORLD_TOUR_TITLE} ${new Date().getFullYear()}`}></CustomDivider>
                {tourInfo && !tourError && tourInfo.length > 0 && (
                    <TourTable tourData={tourInfo} />
                )}

                {!tourInfo || tourError || tourInfo.length === 0 && (
                    <Typography variant='subtitle1' align='center'
                        sx={{
                            color: 'primary.dark',
                            fontWeight: 'bold',
                        }}>
                        {TOUR_MESSAGE}
                    </Typography>
                )}
            </BoxWithMargin>
        </>
    )
}