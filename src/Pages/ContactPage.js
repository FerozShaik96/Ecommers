import React from "react";
import Content from "../Contact/ContactContent/Content";
import Header from "../Contact/ContentHeader/Header";
import NavBar from "../Contact/ContentNavBar/NavBar";
import Footer from "../UI/Footer/Footer";
const ContactPage = () => {
  return (
    <React.Fragment>
      <header>
        <NavBar />
        <Header />
      </header>
      <main>
        <Content />
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};
export default ContactPage;
