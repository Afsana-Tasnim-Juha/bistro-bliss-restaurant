import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

import Cart from "../Pages/Dashboard/Cart/Cart";
import Dashboard from "../Layout/DashBoard";
import PrivateRoute from './PrivateRoute';
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/menu",
                element: <Menu />,
            },
            {
                path: "/order/:category",
                element: <Order />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <PrivateRoute> <Dashboard></Dashboard></PrivateRoute>,
        children: [
            // normal user routes
            {
                path: "cart",
                element: <Cart />,
            },

            // Admin only routes#

            {
                path: "addItems",
                element: <AddItems></AddItems>,
            },

            {
                path: "users",
                element: <AllUsers />,
            },



        ],

    },
]);

