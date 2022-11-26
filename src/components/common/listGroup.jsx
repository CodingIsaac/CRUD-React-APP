import React, { Component, Fragment } from "react";

const ListGroup = (props) => {
  const { items } = props;

  return (
    <Fragment>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item._id} className="list-group-item">
            {item.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ListGroup;
