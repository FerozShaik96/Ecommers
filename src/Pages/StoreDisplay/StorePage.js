import React from "react";
import CartProvider from "../../Store/CartProvider";
import NavBar from "../../components/NavBar/NavBar";
import Header from "../../components/Header/Header";
import Display from "../../components/Display/Display";
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
