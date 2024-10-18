import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { HomePage } from "../Pages/HomePage";
import { path } from "framer-motion/client";
import { LayoutPage } from "../Pages/LayoutPage";
import { GameDetailPage } from "../Pages/GameDetailPage";
import ErrorPage from "../Pages/ErrorPage";



const router = createBrowserRouter([
    {
        path:'/',
        element:<LayoutPage/>,
        errorElement:<ErrorPage/>,
        children:
        [
        {
        index:true,
        element: <HomePage/>
        },
        {
            path:'games/:id',
            element: <GameDetailPage/>
        }
        ]
    }
])

export default router