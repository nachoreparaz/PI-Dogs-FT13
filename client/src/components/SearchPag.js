import React from "react";
import "./SearchPag.css";

const SearchPag = ({ dogsPerPage, filterByTemp, totalDogs, paginate, nextPage, prevPage }) => {
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
    <div className="pagination:container">
      <div class="pagination:number arrow" onClick = { () => prevPage() } >
        <span class="arrow:text">{"<"} Prev</span> 
      </div>
      {
      pageNumbers.map((number) => (
        <div key={number} className="pagination:number" onClick={() => paginate(number)} >
          <a  href="#" className="btnA">
            {number}
          </a>
        </div>
      ))
      }
      <div class="pagination:number arrow" onClick = { () => nextPage() } >
        <span class="arrow:text">Next {">"}</span> 
    </div>
</div>
  );
};

export default SearchPag;
