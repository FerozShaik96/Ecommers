import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Home/Homereneder/HomePage";
import Storepage from "./components/StoreDisplay/StorePage";
import About from "./About/Aboutrender/About";
import ContactPage from "./Pages/ContactPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/store", element: <Storepage /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <ContactPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
