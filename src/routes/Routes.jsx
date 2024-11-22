import { createBrowserRouter, } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Main from "../layout/Main";
import Error from "../pages/Error/Error"
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Dashboard/>,
              },
            //   {
            //     path: "/products",
            //     element: <Products />,
            //   },
            //   {
            //     path: "/shop",
            //     element: <Shop />,
            //   },
             
            //   {
            //     path: "/ShopGridDefault",
            //     element: <DefaultProducts />,
            //   },
            //   {
            //     path: "/shopList",
            //     element: <ShopList />,
            //   },
             
          ],
    },
  
    

]);