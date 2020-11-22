import React from 'react';

const SearchBar = ({ filter, setFilter }) => {
  return (
    <form>
      <label htmlFor="search">
        Search:
        <input
          type="text"
          name="search"
          placeholder="Type here"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        ></input>
      </label>
    </form>
  );
};

export default SearchBar;
