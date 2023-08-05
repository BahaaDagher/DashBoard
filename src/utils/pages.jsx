import { lazy } from "react";
import Nav from "../components/nav/Nav";
const HomePage = lazy(()=> import("../pages/Home"))
export default [
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/nav",
        element: <Nav/>,
    },

]
