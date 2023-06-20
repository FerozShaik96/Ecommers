import React, { useState, useEffect, useCallback } from "react";
import Loading from "../../Loading";
import { Button, Container } from "react-bootstrap";

const HomeContent = () => {
  const [Movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const Data = await fetch(
        "https://ecommers-8b1d4-default-rtdb.firebaseio.com/movies.json"
      );
      if (Data.status !== 200) {
        throw new Error("Something Went Wrong Please Try again later");
      }
      let response = await Data.json();
      // const transferedData = response.results.map((item) => {
      //   return {
      //     id: item.episode_id,
      //     date: item.release_date,
      //     title: item.title,
      //     director: item.director,
      //   };
      // });
      const LoadedMovies = [];
      for (const key in response) {
        LoadedMovies.push({
          id: key,
          title: response[key].Movie,
          director: response[key].Director,
          date: response[key].Date,
        });
      }
      setMovies(LoadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
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
      {!isLoading && error && <p>{error}</p>}
      {isLoading && <Loading />}
    </React.Fragment>
  );
};
export default HomeContent;
