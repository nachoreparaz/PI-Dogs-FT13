import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  orderAZSearch,
  orderZASearch,
  filterTemperSearch,
  getTemper,
} from "../actions";
import SearchPag from "./SearchPag";

const SearchDogs = () => {
  const [current, setCurrent] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(10);

  const dispatch = useDispatch();
  const search = useSelector((state) => state.searchDogs);
  const getTemperament = useSelector((state) => state.getTemper);
  const filterByTemp = useSelector((state) => state.temperFilterSearch);
  console.log("filterByTemp: ", filterByTemp);

  useEffect(() => {
    dispatch(getTemper());
  }, []);

  const indexOfLastDog = current * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = search.slice(indexOfFirstDog, indexOfLastDog);
  const currentDogsFilter = filterByTemp.slice(indexOfFirstDog, indexOfLastDog);

  const paginate = (pageNumber) => setCurrent(pageNumber);

  function fn1(e) {
    if (e.target.value == "Z-A") {
      dispatch(orderZASearch(search));
    } else {
      dispatch(orderAZSearch(search));
    }
  }

  function onFilter(e) {
    dispatch(filterTemperSearch(search, e.target.value));
  }

  return (
    <div>
      <div className="ordenamiento">
        <div className="spanOrder">
          <span>Filtrar por temperamento: </span>
        </div>
        <div className="selectOrder">
          <select onChange={(e) => onFilter(e)}>
            {search.length > 0 ? (
              getTemperament.map((x, index) => <option key={index}>{x}</option>)
            ) : (
              <select></select>
            )}
          </select>
        </div>
      </div>

  {/*     <div className="ordenamiento">
        <div className="spanOrder">
          <span>Ordenamiento Alfabeticamente: </span>
        </div>
        <div className="selectOrder">
          <select onChange={(e) => fn1(e)}>
            <option value="A-Z" name="A-Z">
              A-Z
            </option>
            <option value="Z-A" name="Z-A">
              Z-A
            </option>
          </select>
        </div>
      </div> */}
      <div></div>
      <div className="container">
        {filterByTemp.length < 1 && currentDogs
          ? currentDogs.map((x) => (
              <div className="dogsContainer" key={x.id}>
                <div className="dogName">
                  <Link to={`/dog/${x.id}`}>
                    <h4>{x.name}</h4>
                  </Link>
                </div>
                <div className="dogTemper">
                  <span>Temperamento: {x.temper}</span>
                </div>
                <div className="imgCtn">
                  <img src={x.image} className="img" />
                </div>
              </div>
            ))
          : currentDogsFilter.map((x) => (
              <div className="dogsContainer" key={x.id}>
                <div className="dogName">
                  <Link to={`/dog/${x.id}`}>
                    <h4>{x.name}</h4>
                  </Link>
                </div>
                <div className="dogTemper">
                  <span>Temperamento: {x.temper}</span>
                </div>
                <div className="imgCtn">
                  <img src={x.image} className="img" />
                </div>
              </div>
            ))}
      </div>
      <SearchPag
        dogsPerPage={dogsPerPage}
        filterByTemp={filterByTemp.length}
        totalDogs={search.length}
        paginate={paginate}
      />
    </div>
  );
};

export default SearchDogs;
