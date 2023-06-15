import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Display from "./components/Display/Display";
function App() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default App;
