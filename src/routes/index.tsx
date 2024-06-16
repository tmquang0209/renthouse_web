import NotFound from "../screens/NotFound";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register  from "../screens/Register";
import { router } from "../constants/interface";
import VerifyCode from "../screens/VerifyCode";

export const PublicRouter:router[]=[
    {
        path: "/",
        element: Home
    },
    {
        path: "/login",
        element: Login
    },
    {
        path: "/register",
        element: Register
    },
    {
        path: "/verify-code",
        element: VerifyCode
    },
    {
        path: "*",
        element: NotFound
    }
]
