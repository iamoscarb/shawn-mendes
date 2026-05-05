import { createBrowserRouter, Navigate } from "react-router";
import { ShawnHomeLayout } from "../shawnMendes/layout/ShawnHomeLayout";
import { NotFoundPage } from "../shawnMendes/pages/NotFoundPage";
import { AlbumPage } from "../shawnMendes/pages/AlbumPage";
import { HomePage } from "../shawnMendes/pages/HomePage";
import { LiveTourPage } from "../shawnMendes/pages/LiveTourPage";
import { MusicPage } from "../shawnMendes/pages/MusicPage";
import { ErrorPage } from "../shawnMendes/pages/ErrorPage";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <ShawnHomeLayout />,
        errorElement: <Navigate to='/error' />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'music',
                element: <MusicPage />
            },
            {
                path: 'tour',
                element: <LiveTourPage />
            },
            {
                path: 'error',
                element: <ErrorPage />
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
        errorElement: <Navigate to='/error' />,
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
