import { createBrowserRouter } from "react-router";
import App from "../App";
import { ShawnHomeLayout } from "../shawnMendes/layout/ShawnHomeLayout";
import { AlbumPage } from "../shawnMendes/pages/AlbumPage";
import { NotFoundPage } from "../shawnMendes/pages/NotFoundPage";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <ShawnHomeLayout />,
        children: [
            {
                index: true,
                element: <App />
            },
            {
                path: 'music',
                element: <AlbumPage />
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
        ]
    }
]);
