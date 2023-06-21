import React, { useEffect, useCallback } from "react";
import HomeHeader from "../../Home/HomeHeader/Header";
import HomeContent from "../../Home/HomeContent/HomeContent";
import HomeForm from "../../Home/HomeForm/HomeForm";
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
      {/* <HomeNavBar /> */}
      <HomeHeader />
      <HomeForm onAddMovies={AddUserData} />
      <HomeContent />
    </React.Fragment>
  );
};
export default HomePage;
