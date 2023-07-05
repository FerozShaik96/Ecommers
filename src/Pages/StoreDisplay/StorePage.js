import React, { Suspense } from "react";
import { Await, defer, json, useRouteLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import Display from "../../components/Display/Display";
const Storepage = () => {
  const { products } = useRouteLoaderData("product-details");

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={products}>
        {(loaderProducts) => {
          return <Display products={loaderProducts} />;
        }}
      </Await>
    </Suspense>
  );
};
export default Storepage;

async function LoaderData() {
  const data = await fetch("https://fakestoreapi.com/products?limit=5");
  if (!data.ok) {
    throw json({ message: "Could not able to fetch Data" });
  }
  const response = await data.json();
  console.log(response);
  return response;
}
export function Loader() {
  return defer({
    products: LoaderData(),
  });
}
