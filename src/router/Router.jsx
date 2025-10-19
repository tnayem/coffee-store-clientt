import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                loader:()=>fetch("http://localhost:3000/coffees"),
                element:<Home></Home>
            }
        ]
    }
])