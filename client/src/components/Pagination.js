import React from "react";
import "./Pagination.css";

const Pagination = ({ dogsPerPage, filterByTemp, totalDogs, paginate }) => {
  const pageNumbers = [];

  if (filterByTemp > 0) {
    for (let i = 1; i <= Math.ceil(filterByTemp / dogsPerPage); i++) {
      pageNumbers.push(i);
    }
  } else {
    for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="abc">
      {pageNumbers.map((number) => (
        <div key={number} className="paginationCtn">
          <a onClick={() => paginate(number)} href="#" className="btnA">
            {number}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
