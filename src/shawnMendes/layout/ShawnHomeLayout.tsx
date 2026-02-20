import { Outlet } from "react-router"
import { Footer } from "../../shared/components/Layout/Footer"
import { HeaderMenu } from "../../shared/components/Layout/HeaderMenu"

export const ShawnHomeLayout = () => {
    return (
        <>
            <HeaderMenu />
            <Outlet />
            <Footer />
        </>
    )
}
