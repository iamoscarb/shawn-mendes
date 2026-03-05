import { Outlet } from "react-router"
import { HeaderMenu } from "../../shared/components/Layout/HeaderMenu"
import { ThemeSwitcherProvider } from "../../styles/ThemeSwitcherProvider"
import { Footer } from "../../shared/components/Layout/Footer"

export const ShawnHomeLayout = () => {
    return (
        <ThemeSwitcherProvider>
            <HeaderMenu />
            <Outlet />
            <Footer />
        </ThemeSwitcherProvider>
    )
}
