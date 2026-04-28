import { createTheme } from "@mui/material";

export const themes: any = {
    home: createTheme({
        palette: {
            primary: {
                main: '#1E2833'
            },
            secondary: {
                main: '#9ea0a3'
            },
            info: {
                main: '#acacac'
            },
            text: {
                primary: '#121216'
            }
        }
    }),
    shawnAlbum: createTheme({
        palette: {
            primary: {
                main: '#111'
            },
            secondary: {
                main: '#D9D9D9'
            },
            info: {
                main: '#b6b6b6'
            },
            text: {
                primary: '#262626'
            }
        }
    }),
    wonderAlbum: createTheme({
        palette: {
            primary: {
                main: '#62738F'
            },
            secondary: {
                main: '#E7E7E7'
            },
            info: {
                main: '#B8BECE'
            },
            text: {
                primary: '#55647D'
            }
        }
    })
}