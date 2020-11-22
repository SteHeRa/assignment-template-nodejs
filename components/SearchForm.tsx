import React from 'react';

const SearchForm = ({ setFrom, setTo }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFrom(new Date(e.target.from.value).getTime());
    setTo(new Date(e.target.to.value).getTime());
  };

  return (
    <div>
      <h2>Search For Contracts</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="from">
          {' '}
          From:
          <input type="Date" name="from"></input>
        </label>
        <label htmlFor="to">
          {' '}
          To:
          <input type="Date" name="to"></input>
        </label>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default SearchForm;
