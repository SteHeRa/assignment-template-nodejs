import React from 'react';

const NoticesListItem = ({ notice }) => {
  return (
    <div className="notice-list-item">
      <h1>{notice.item.title}</h1>
      <h3>Published:</h3>
      <p>{notice.item.publishedDate}</p>
      <h3>Deadline:</h3>
      <p>{notice.item.deadlineDate}</p>
      <h3>Organisation:</h3>
      <p>{notice.item.organisationName}</p>
      <h3>Description:</h3>
      <p>{notice.item.description}</p>
    </div>
  );
};

export default NoticesListItem;
