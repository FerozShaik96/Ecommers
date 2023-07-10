import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Homereneder/HomePage";
import Storepage, {
  Loader as displayLoader,
} from "./Pages/StoreDisplay/StorePage";
import AboutPage from "./Pages/Aboutrender/About";
import ProductDisplay from "./Pages/ProductDisplay/ProductDisplay";
import Root from "./Pages/Root/Root";
import ContactPage from "./Pages/ContactPage";
import SignIn from "./Login Pages/SignIn";
import SignUp from "./Login Pages/SignUp";
import ForgotPassword from "./Login Pages/ForgotPassword";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      {
        path: "signin",
        element: <SignIn />,
      },
      { path: "forgotPassword", element: <ForgotPassword /> },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "store",
        id: "product-details",
        loader: displayLoader,
        children: [
          { index: true, element: <Storepage /> },
          { path: ":id", element: <ProductDisplay /> },
        ],
      },
    ],
  },
  // {
  //   path: "/store",
  //   element: <Storepage />,
  //   children: [
  //     { path: "/store/product/:productid", element: <ProductDisplay /> },
  //   ],
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
