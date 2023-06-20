import React, { useEffect, useCallback } from "react";
import Footer from "../../UI/Footer/Footer";
import HomeNavBar from "../HomeNavBar/HomeNavBar";
import HomeHeader from "../HomeHeader/Header";
import HomeContent from "../HomeContent/HomeContent";
import HomeForm from "../HomeForm/HomeForm";
const HomePage = () => {
  const AddUserData = async (Movies) => {
    const response = await fetch(
      "https://ecommers-8b1d4-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(Movies),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await response.json();
    // console.log(data);
  };

  return (
    <React.Fragment>
      <HomeNavBar />
      <HomeHeader />
      <HomeForm onAddMovies={AddUserData} />
      <HomeContent />
      <Footer />
    </React.Fragment>
  );
};
export default HomePage;
