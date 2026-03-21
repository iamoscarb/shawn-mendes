import { useThemeSwitcher } from '../../styles/ThemeSwitcherProvider';
import { BannerImage } from '../../shared/components/Banner/BannerImage';
import { BoxWithMargin } from '../../shared/components/Box/BoxWithMargin';
import { CustomDivider } from '../../shared/components/Divider/CustomDivider';
import { AlbumList } from '../../shared/components/ImageList/AlbumList';
import type { AlbumImages } from '../../interfaces/images.Interface';

const albums: AlbumImages[] = [
    { title: 'Shawn', img: 'https://m.media-amazon.com/images/I/71ewAN10xmL._UF1000,1000_QL80_.jpg', root: '/album/shawn' },
    { title: 'Wonder', img: 'https://m.media-amazon.com/images/I/71Q9an5gVGS._UF1000,1000_QL80_.jpg', root: '/album/wonder' },
    { title: 'Shawn Mendes', img: 'https://m.media-amazon.com/images/I/A16Tg1LfILL._UF1000,1000_QL80_.jpg', root: '/album/shawn-mendes' },
    { title: 'Illuminate', img: 'https://m.media-amazon.com/images/I/81IGZPcWxmL._UF1000,1000_QL80_.jpg', root: '/album/illuminate' },
    { title: 'Handwritten', img: 'https://m.media-amazon.com/images/I/71Cl9FTmDEL._UF1000,1000_QL80_.jpg', root: '/album/handwritten' }
]

function App() {

    const { setThemeName } = useThemeSwitcher();
    setThemeName('home')

    return (
        <>
            <BannerImage mobilBanner='banners/shawn-home-hero-desktop.webp' desktopBanner='banners/shawn-home-hero-desktop.webp' />
            <BoxWithMargin bgColor='secondary.main'>
                <CustomDivider color='primary.main' title='Music'></CustomDivider>
                <AlbumList photoList={albums} showTitle={true} style='album'></AlbumList>
            </BoxWithMargin>
        </>
    )
}

export default App
