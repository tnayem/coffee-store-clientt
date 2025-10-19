import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import UpdateCoffee from "../components/UpdateCoffee";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                loader:()=>fetch("http://localhost:3000/coffees"),
                element:<Home></Home>
            },
            {
                path:'/update/:id',
                loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
                element:<UpdateCoffee></UpdateCoffee>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            }
        ]
    }
])