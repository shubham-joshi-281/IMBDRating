import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "./Context";

const Movie = () => {
  const { movie } = useContext(AppContext);
  return (
    <section className="container">
    <div className="box">
      {movie.map((ele, ind) => {
        const { imdbID, Title, Poster } = ele;
        const titleName = Title.substring(0, 15)
        return (
          <NavLink to={`movie/${imdbID}`} key={ind}>
            <div className="card">
              <h2>{(titleName.length > 14 ? `${titleName}...` : titleName)}</h2>
              <img src={Poster} alt={imdbID} />
            </div>
          </NavLink>
        );
      })}
    </div>
  </section>
  );
};

export default Movie;
