import { createBrowserRouter } from "react-router";
import Layout from "../components/layout/Layout";
import Home from "../Pages/Home";

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        index:true,
        element:<Home></Home>
      }
    ]
  },
]);