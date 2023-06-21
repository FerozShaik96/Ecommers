import React from "react";
import { Outlet } from "react-router-dom";
import NavBarUi from "../../UI/NavBar/NavBarUi";
import Footer from "../../UI/Footer/Footer";

const Root = () => {
  return (
    <>
      <NavBarUi />
      <Outlet />
      <Footer />
    </>
  );
};
export default Root;
