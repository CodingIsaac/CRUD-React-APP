import React, { Fragment } from "react";
import _ from "lodash";

const Pagination = props => {
  const { itemsCount, pageSize } = props;

  const pagesCount = itemsCount / pageSize;
  const pages = _.range(1, pagesCount + 1);

  return (
    <Fragment>
      <nav>
        <ul className="pagination">
          {pages.map(page => (
            <li key={page} className="page-item">
              <a className="page-link">{page}</a>
            </li>
          ))}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Pagination;
