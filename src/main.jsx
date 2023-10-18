import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Signup from './Components/Signup/Signup';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AddProduct from './Components/AddProduct/AddProduct';
import Signin from './Components/Signin/Signin';
import AuthProvider from './Components/AuthProvider/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement :<ErrorPage></ErrorPage>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/signup",
        element : <Signup></Signup>
      },
      {
        path : "/signin",
        element : <Signin></Signin>
      },
      {
        path : "/addProduct",
        element : <AddProduct></AddProduct>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
     <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
