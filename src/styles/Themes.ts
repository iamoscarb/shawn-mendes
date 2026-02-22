import { createTheme } from "@mui/material";

export const themes: any = {
    home: createTheme({
        palette: {
            primary: {
                main: '#003cbd'
            },
            secondary: {
                main: '#99c1fd'
            },
            info: {
                main: '#dae7ff'
            },
            text: {
                primary: '#003cbd'
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