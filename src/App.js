import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Homereneder/HomePage";
import Storepage from "./Pages/StoreDisplay/StorePage";
import About from "./About/Aboutrender/About";
import Root from "./Pages/Root/Root";
import ContactPage from "./Pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/home", element: <HomePage /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
  { path: "/store", element: <Storepage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
