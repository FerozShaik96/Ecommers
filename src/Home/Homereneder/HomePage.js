import React from "react";
import Footer from "../../UI/Footer/Footer";
import HomeNavBar from "../HomeNavBar/HomeNavBar";
import HomeHeader from "../HomeHeader/Header";
import HomeContent from "../HomeContent/HomeContent";
import HomeForm from "../HomeForm/HomeForm";
const HomePage = () => {
  return (
    <React.Fragment>
      <HomeNavBar />
      <HomeHeader />
      <HomeForm />
      <HomeContent />
      <Footer />
    </React.Fragment>
  );
};
export default HomePage;
