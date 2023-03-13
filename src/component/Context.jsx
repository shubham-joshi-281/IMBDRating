import React, { createContext, useEffect, useState } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isdata, setIsData] = useState(true);
  const [movie, setMovie] = useState([]);
  const [iserror, setIsError] = useState({ show: "false", msg: "" });
  const [search, setSearch] = useState("titanic");
  useEffect(() => {
    let clearTimer = setTimeout(() => {
      const getMovies = async () => {
        try {
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}`
          );
          const data = await res.json();
          console.log(data);
          if (data.Response === "True") {
            setIsData(false);
            setMovie(data.Search);
          } else {
            setIsError({
              show: true,
              msg: data.error,
            });
          }
        } catch (error) {
          console.log(error);
        }
      };
      getMovies();
    }, 500);
    return () => clearTimeout(clearTimer);
  }, [search]);

  return (
    <AppContext.Provider value={{ isdata, iserror, movie, search, setSearch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
