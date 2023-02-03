
import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import Header from './components/Header'
import Body from './components/Body'
import {  createBrowserRouter , Outlet, RouterProvider } from "react-router-dom";
import  Contact  from "./components/Contact";
import  About  from "./components/About";
import Error  from "./components/Error";
import RestaurantMenu from './components/RestaurantMenu'

const AppLayout = ()=>{
return ( 
    <>
        <Header />
        <Outlet />
    
    </>
)
}

const router = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement :<Error/>,
        children:[
            {
                path: "/",
                element: <Body />,
              },
             {
                path :"/about",
                element :<About />
             },
             {
                path :"/contact",
                element :<Contact />
             },
             {
                path :'/restaurant/:id',
                element : <RestaurantMenu />
             }
            ]
    }
    ])


const root = createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);

