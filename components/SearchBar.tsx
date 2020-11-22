import React from 'react';

const SearchBar = ({ filter, setFilter }) => {
  return (
    <form>
      <label htmlFor="search">
        {`Search In Description:  `}
        <input
          type="text"
          name="search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        ></input>
      </label>
    </form>
  );
};

export default SearchBar;
