import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {  getInitialDogs, getTemper,orderZA , orderAZ, filterTemper} from '../actions';
import './Dogs.css'
import Pagination from './Pagination';

const Dogs = ( ) => {

    const [ current, setCurrent] = useState(1);
    const [ dogsPerPage, setDogsPerPage ] = useState(10);

    const dispatch = useDispatch()
    const getDogsRedux = useSelector(state => state.dogs)
    const getTemperament = useSelector(state => state.getTemper)
    

    useEffect(() => {
      dispatch(getInitialDogs())
      dispatch(getTemper())
    }, [])

    const indexOfLastDog = current * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = getDogsRedux.slice(indexOfFirstDog, indexOfLastDog)

    const paginate = (pageNumber) => setCurrent(pageNumber)

    function fn1(e){
      if(e.target.value == 'Z-A'){
        dispatch(orderZA(getDogsRedux))
      } else{
        dispatch(orderAZ(getDogsRedux))
      }
    }




    function onFilter(e){
      dispatch(filterTemper(getDogsRedux, e.target.value))
    }

    return (
        <div className = 'all'>
          <div className = 'ordenamiento'>
              <div className = 'spanOrder'>
                  <span>Filtrar por temperamento: </span>
              </div>
              <div  className = 'selectOrder'>
                  <select onChange= {(e) => onFilter(e)}>
                    {
                      getDogsRedux.map((x, index) => (
                        <option key = {index}>{ x.temper }</option>
                      ))
                    }
                  </select>
              </div>        
          </div>
          <div className = 'ordenamiento'>
              <div className = 'spanOrder'>
                <span>Ordenamiento Alfabeticamente: </span>
              </div>
              <div className = 'selectOrder'>
                <select onChange={(e) => fn1(e)}>
                  <option value = 'A-Z' name = 'A-Z'>A-Z</option>
                  <option value = 'Z-A' name ='Z-A' >Z-A</option>
                </select>
              </div>
          </div>
          
           <div className = 'container'>
             {
               currentDogs && currentDogs.map(dog => (
                <div className= 'dogsContainer' key = { dog.id }>
                  <div className = 'dogName'>
                    <Link to = {`/dog/${dog.id}`} >
                        <h4>{ dog.name }</h4> 
                      </Link>
                  </div>
                  <div className = 'imgCtn'>
                    <img src = { dog.image } className = 'img'/>
                  </div>
                  <div className = 'dogTemper'> 
                    <span>Temperamento: { dog.temper }</span>
                  </div>
              </div>
               ))
             }
           </div>
           <Pagination dogsPerPage={dogsPerPage} totalDogs={getDogsRedux.length} paginate={paginate}/>
        </div>
    )
}

export default Dogs;
