import { createBrowserRouter, Navigate } from "react-router";
import App from "../App";
import { ShawnHomeLayout } from "../shawnMendes/layout/ShawnHomeLayout";

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
                path: '*',
                element: <Navigate to='/' />
            }
        ]
    }
]);
