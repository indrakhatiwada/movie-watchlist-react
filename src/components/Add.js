import React, { useState } from "react";
import MovieCard from "./MovieCard";

const Add = () => {
  const [Query, SetQuery] = useState("");
  const [results, setResults] = useState([]);
  const onChange = (e) => {
    e.preventDefault();
    SetQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=true&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
          console.log(results);
        } else {
          setResults([]);
        }
      });
  };
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="search movies"
              value={Query}
              onChange={onChange}
            ></input>
            {results.length > 0 && (
              <ul className="results">
                {results.map((movie) => (
                  <MovieCard movie={movie} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
