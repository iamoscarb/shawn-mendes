import { useEffect, useState } from 'react';
import { AppBar, Button, Collapse, useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import { Link } from 'react-router';


const pages = [{ name: 'Music', root: '/music' }, { name: 'Videos', root: '/videos' }, { name: 'Tour', root: '/tour' }, { name: 'Subscribe', root: '/' }];
const logoImage = 'https://www.shawnmendesofficial.com/wp-content/uploads/sites/2687/2024/07/Shawn-Mendes-600x85.png'

export const HeaderMenu = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const handleOpenNavMenu = () => {
        setOpenMenu((prev) => {
            return !prev;
        })
    };

    useEffect(() => {
        if (isDesktop && openMenu) {
            setOpenMenu(false)
        }
    }, [isDesktop, openMenu])

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{
                    justifyContent: {
                        xs: 'center', md: 'flex-start'
                    }
                }}>
                    <Link to='/'>
                        <Box
                            component="img"
                            sx={{
                                height: 30,
                                mx: { md: 2 }
                            }}
                            alt="Shawn Mendes"
                            src={logoImage}
                        />
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button component={Link} key={page.name}
                                to={page.root} className='white-text'
                                sx={{ my: 2, mx: 0.5, color: 'white', display: 'block' }}>
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            className='transition-all duration-900'>
                            {openMenu ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
            <Collapse in={openMenu} timeout="auto" unmountOnExit>
                <Box sx={{
                    height: '89vh',
                    width: '100%',
                    bgcolor: 'black',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: 5
                }}>
                    {pages.map((page) => (
                        <Button component={Link} key={page.name} onClick={handleOpenNavMenu} style={{ margin: '20px 0' }}
                            className='text-xl hover:text-gray-700' to={page.root}>
                            {page.name.toUpperCase()}
                        </Button>
                    ))}
                </Box>
            </Collapse>
        </AppBar>

    );
}

