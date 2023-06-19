import React, { useState } from "react";
import Loading from "../../Loading";
import { Button, Container } from "react-bootstrap";

const HomeContent = () => {
  const [show, setUnShow] = useState(true);
  const [Movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    setUnShow(false);
    setIsLoading(true);
    setError(null);
    try {
      const Data = await fetch("https://swapi.dev/api/film/ ");
      if (Data.status !== 200) {
        throw new Error("Something Went Wrong Please Try again later");
      }
      let response = await Data.json();
      const transferedData = response.results.map((item) => {
        return {
          id: item.episode_id,
          date: item.release_date,
          title: item.title,
          director: item.director,
        };
      });
      setMovies(transferedData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };
  return (
    <React.Fragment>
      <Container>
        <ul className="my-5">
          {!isLoading &&
            Movies.map((item) => (
              // <div>
              <li
                key={item.id}
                className="d-flex justify-content-between pt-4   border-bottom"
              >
                <span>{item.date} </span>
                <span>{item.director} </span>
                <span>{item.title}</span>
                <span>
                  <Button className="mb-3">Buy Tickets</Button>
                </span>
              </li>
              // </div>
            ))}
        </ul>
      </Container>
      {show && (
        <div className=" d-flex justify-content-center align-item-center">
          <Button className="my-3 " onClick={fetchData}>
            Fetch Data
          </Button>
        </div>
      )}
      {!isLoading && error && <p>{error}</p>}
      {isLoading && <Loading />}
    </React.Fragment>
  );
};
export default HomeContent;
