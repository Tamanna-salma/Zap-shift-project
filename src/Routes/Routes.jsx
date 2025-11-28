import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import Home from "../Pages/Home";
import Coverage from "../components/Coverage";
import AuthLayout from "../components/AuthLayout/AuthLayout";
import Register from "../Pages/Auth/Register";
import Login from "../Pages/Auth/login/Login";
import Rider from "../Pages/Rider";
import PrivateRoute from "./PrivateRoute";
import SendParcel from "../Pages/sendPercel/SendParcel";

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {

        path:'rider',
        element:<PrivateRoute>
          <Rider></Rider>

        </PrivateRoute>
      },
      {
        path:'sendparcel',
        element:<PrivateRoute>
          <SendParcel></SendParcel>
        </PrivateRoute>,
        loader:()=>fetch('/warehouses.json').then(res=>res.json())
      },
      {
        path:"/coverage",
        element:<Coverage></Coverage>,
        loader:()=>fetch('/warehouses.json').then(res=>res.json())
      },
    ]
  },
  { 
    path:"/",
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>

      },
    ]

  }
]);