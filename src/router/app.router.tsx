import { createBrowserRouter, Navigate } from "react-router";
import { ShawnHomeLayout } from "../shawnMendes/layout/ShawnHomeLayout";
import { NotFoundPage } from "../shawnMendes/pages/NotFoundPage";
import { AlbumPage } from "../shawnMendes/pages/AlbumPage";
import HomePage from "../shawnMendes/pages/HomePage";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <ShawnHomeLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'music',
                element: <Navigate to='/' />
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
        ]
    },
    {
        path: "/album/",
        element: <ShawnHomeLayout />,
        children: [
            {
                index: true,
                element: <Navigate to='/music' />
            },
            {
                path: ":idAlbum",
                element: <AlbumPage />
            }
        ]
    }
]);
