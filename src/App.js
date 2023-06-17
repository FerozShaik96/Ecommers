import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Display from "./components/Display/Display";
import CartProvider from "./Store/CartProvider";
function App() {
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
}

export default App;
