import { createContext, useContext, useState } from "react"
import { themes } from "./Themes"
import { ThemeProvider } from "@mui/material/styles"

const ThemeContext = createContext({
    themeName: 'home',
    setThemeName: (_: string) => { 0 }
})

export const useThemeSwitcher = () => useContext(ThemeContext)

export const ThemeSwitcherProvider = ({ children }: any) => {
    const [themeName, setThemeName] = useState('home');
    return (
        <ThemeContext.Provider value={{ themeName, setThemeName }}>
            <ThemeProvider theme={themes[themeName]}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}
