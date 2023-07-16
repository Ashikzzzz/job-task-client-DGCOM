import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main";
import SignUp from "../authentication/SignUp";

export const router= createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },

        ]

    }
])