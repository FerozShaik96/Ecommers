import React from "react";
import CartProvider from "../../Store/CartProvider";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import Display from "../Display/Display";
import Footer from "../../UI/Footer/Footer";
const Storepage = () => {
  return (
    <CartProvider>
      <header>
        <NavBar />
        <Header />
      </header>
      <main>
        <Display />
      </main>
      <footer>
        <Footer />
      </footer>
    </CartProvider>
  );
};
export default Storepage;
