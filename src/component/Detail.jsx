import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const [isdata, setIsData] = useState(true);
  useEffect(() => {
    let clearTimer = setTimeout(() => {
      const getMovies = async () => {
        try {
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=f0988a83&i=${id}`
          );
          const data = await res.json();
          console.log(data);
          if (data.Response === "True") {
            setIsData(false);
            setMovie(data);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getMovies();
    }, 1000);
    return () => clearTimeout(clearTimer);
  }, []);
  return (
    <div className="single-container">
      <div className="left-side">
        <img src={movie.Poster} alt="" />
      </div>
      <div className="right-side">
        <p className="info">
          Movie name : <span>{movie.Title}</span>.
        </p>
        <p className="info">
          Released in year : <span>{movie.Released}</span>.
        </p>
        <p className="info">
          Movie Gener : <span>{movie.Genre}</span>.{" "}
        </p>
        <p className="info">
          Movie Rating : <span>{movie.imdbRating}</span>.
        </p>
        <p className="info">
          Country : <span>{movie.Country}</span>.
        </p>
        <NavLink className="back" to="/">
          Go Back
        </NavLink>
      </div>
    </div>
  );
};

export default SingleMovie;
