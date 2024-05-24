import {
    createBrowserRouter,
  } from "react-router-dom";
import ClientLayout from "../Pages";
import Home from "../Pages/HomePage";
import AddPage from "../Pages/AddPage";
import Detail from "../Pages/DetailsPage";
import Product from "../Pages/ProductsPage";

 export const router = createBrowserRouter([
    {
        path:"/",
        element:<ClientLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"add-products",
                element:<AddPage/>
            },
            {
                path:"products/:id",
                element:<Detail/>
            },
            {
                path:"products",
                element:<Product/>
            }
        ]
    }
  ])