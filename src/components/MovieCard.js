import React from "react";
import "../moviecard.css";

function MovieCard({ movie }) {
  return (
    <>
      <div clasName="movie_card" id="bright">
        <div clasName="info_section">
          <div clasName="movie_header">
            <img
              clasName="locandina"
              src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`}
            />
            <h1>{movie.title}</h1>
            <h4>{movie.release_date}</h4>
            <span clasName="minutes">{movie.vote_average}</span>
          </div>
          <div clasName="movie_desc">
            <p clasName="text">{movie.overview}</p>
          </div>
          <div clasName="movie_social"></div>
        </div>
        <div clasName="blur_back bright_back">
          <img src={`http://image.tmdb.org/t/p/w200${movie.backdrop_path}`} />
        </div>
      </div>
    </>
  );
}

export default MovieCard;
