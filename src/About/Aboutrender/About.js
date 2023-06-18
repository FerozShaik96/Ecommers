import React from "react";
import AboutNav from "../NavBar/NavBarAbout";
import AboutHeader from "../Header/AboutHeader";
import AboutContent from "../Content/AboutContent";
import Footer from "../../UI/Footer/Footer";

const AboutPage = () => {
  return (
    <React.Fragment>
      <AboutNav />
      <AboutHeader />
      <AboutContent />
      <Footer />
    </React.Fragment>
  );
};
export default AboutPage;
