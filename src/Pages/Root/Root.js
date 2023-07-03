import React from "react";
import { Outlet } from "react-router-dom";
import CartProvider from "../../Store/CartProvider";
import NavBarUi from "../../UI/NavBar/NavBarUi";
import Footer from "../../UI/Footer/Footer";

const Root = () => {
  return (
    <CartProvider>
      <NavBarUi />
      <Outlet />
      <Footer />
    </CartProvider>
  );
};
export default Root;
