import React from "react";
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
      <HomeForm onAddMovies={AddUserData} />
      <HomeContent />
    </React.Fragment>
  );
};
export default HomePage;
async function LoaderData() {
  const Data = await fetch(
    "https://ecommers-8b1d4-default-rtdb.firebaseio.com/movies.json"
  );
  if (Data.status !== 200) {
    throw new Error("Something Went Wrong Please Try again later");
  } else {
    const response = await Data.json();
    console.log(response);
    return response;
  }
}
