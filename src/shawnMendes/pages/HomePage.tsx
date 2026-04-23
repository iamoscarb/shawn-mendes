import { useThemeSwitcher } from '../../styles/ThemeSwitcherProvider';
import { BannerImage } from '../../shared/components/Banner/BannerImage';
import { BoxWithMargin } from '../../shared/components/Box/BoxWithMargin';
import { CustomDivider } from '../../shared/components/Divider/CustomDivider';
import { AlbumList } from '../../shared/components/ImageList/AlbumList';
import { MusicVideosList } from '../../shared/components/ImageList/MusicVideosList';
import { useVideos } from '../../hooks/useVideos';
import { useTourDates } from '../../hooks/useTourDates';
import { TourTable } from '../../shared/components/TourTable/TourTable';
import { Typography } from '@mui/material';
import { MUSIC_TITLE, TOUR_MESSAGE, VIDEOS_TITLE, WORLD_TOUR_TITLE } from '../../shared/data/Titles';
import { TOUR_DATES_SHOWED } from '../../shared/data/NumValues';
import { CustomButton } from '../../shared/components/Button/CustomButton';
import { Link } from 'react-router';
import { useMusic } from '../../hooks/useMusic';

export const HomePage = () => {
    const { setThemeName } = useThemeSwitcher();
    const { data: videosInfo, isError: videosError } = useVideos();
    const { data: tourInfo, isError: tourError } = useTourDates();
    const { data: albumInfo } = useMusic('Album')

    setThemeName('home');

    return (
        <>
            <title>Home - Shawn Mendes</title>
            <BannerImage mobilBanner='banners/shawn-home-hero-desktop.webp' desktopBanner='banners/shawn-home-hero-desktop.webp' />
            <BoxWithMargin bgColor='secondary.main'>
                <CustomDivider color='primary.dark' title={MUSIC_TITLE}></CustomDivider>
                <AlbumList photoList={albumInfo || []} showTitle={true} style='album'></AlbumList>
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
                    <>
                        <TourTable tourData={tourInfo.slice(0, TOUR_DATES_SHOWED)} />

                        {tourInfo?.length > TOUR_DATES_SHOWED && (
                            <Link to='/tour' className="flex justify-center items-center">
                                <CustomButton text='Show More Dates' color='primary' />
                            </Link>
                        )}
                    </>
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