import React from 'react';
import NoticesListItem from './NoticesListItem';
import SearchBar from './SearchBar';
import { notice } from '../types/Notice';

const NoticesList = ({ notices, filter, setFilter }) => {
  console.log(notices);
  return (
    <div>
      <h1>Notices</h1>
      <SearchBar filter={filter} setFilter={setFilter} />
      {notices.length > 0
        ? notices.map((notice: notice) => {
            <NoticesListItem notice={notice} />;
          })
        : null}
    </div>
  );
};

export default NoticesList;
