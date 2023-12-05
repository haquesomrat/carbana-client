import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import MyCart from "../Pages/MyCart";
import AddProduct from "../Pages/AddProduct";
import Products from "../Pages/Products";
import ProductDetails from "../Pages/ProductDetails";
import UpdateProduct from "../Pages/UpdateProduct";
import PrivateRouter from "./PrivateRouter";
import Contact from "../Components/Contact";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://curious-goat-sweatpants.cyclic.app/cars"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRouter>
            <AddProduct></AddProduct>
          </PrivateRouter>
        ),
      },
      {
        path: "/updateproduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`https://curious-goat-sweatpants.cyclic.app/cars/${params.id}`),
      },
      {
        path: "/products",
        element: (
          <PrivateRouter>
            <Products></Products>
          </PrivateRouter>
        ),
        loader: () => fetch("https://curious-goat-sweatpants.cyclic.app/cars"),
      },
      {
        path: "/products/:brandname",
        element: (
          <PrivateRouter>
            <Products></Products>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://curious-goat-sweatpants.cyclic.app/newcars/${params.brandname}`
          ),
      },
      {
        path: "/productdetails/:id",
        element: (
          <PrivateRouter>
            <ProductDetails></ProductDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://curious-goat-sweatpants.cyclic.app/cars/${params.id}`),
      },
      {
        path: "/mycart/:email",
        element: (
          <PrivateRouter>
            <MyCart></MyCart>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(
            `https://curious-goat-sweatpants.cyclic.app/userCart/${params.email}`
          ),
      },
    ],
  },
]);

export default Router;
