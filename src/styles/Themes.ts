import { createTheme } from "@mui/material";

export const themes: any = {
    home: createTheme({
        palette: {
            primary: {
                main: '#1E2833'
            },
            secondary: {
                main: '#60666C'
            },
            info: {
                main: '#dae7ff'
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
                main: '#ebe8e8'
            },
            text: {
                primary: '#111'
            }
        }
    })
}