import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import Display from "../../components/Display/Display";
const Storepage = () => {
  const product = useLoaderData();
  return (
    <>
      {/* <NavBar /> */}
      <Header />
      <Display />
      {/* <Footer /> */}
    </>
  );
};
export default Storepage;

export async function Loader() {
  const data = await fetch("https://fakestoreapi.com/products?limit=5");
  const res = data.json();
  console.log(res);
  return res;
}
