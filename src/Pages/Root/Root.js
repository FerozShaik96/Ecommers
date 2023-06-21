import React from "react";
import { Outlet } from "react-router-dom";
import NavBarUi from "../../UI/NavBar/NavBarUi";

const Root = () => {
  return (
    <>
      <NavBarUi />
      <Outlet />
    </>
  );
};
export default Root;
