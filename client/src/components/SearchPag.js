import React from "react";
import "./SearchPag.css";

const SearchPag = ({ dogsPerPage, filterByTemp, totalDogs, paginate }) => {
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
    <div>
      <div className="ctnSearch">
        {pageNumbers.map((number) => (
          <div key={number} className="pagCtn">
            <a onClick={() => paginate(number)} href="#" className="btnA">
              {number}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPag;
