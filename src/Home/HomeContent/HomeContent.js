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
      const Data = await fetch("https://swapi.dev/api/films/ ");
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
