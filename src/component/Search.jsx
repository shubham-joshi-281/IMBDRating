import React, { useContext } from "react";
import { AppContext } from "./Context";

const Search = () => {
  const { search, setSearch } = useContext(AppContext);

  return (
    <section className="search">
      <h2>Search for your Favourite Movie</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="in">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default Search;
