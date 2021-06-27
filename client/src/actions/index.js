import axios from 'axios';

export function getInitialDogs() {
    return function(dispatch){
        return axios.get(`http://localhost:3001/dogs`)
        .then(res => {
            dispatch({type: 'GET_INITIAL_DOGS', payload: res.data})
        })   
    }
}

export function getDogsbyBreed(name) {
    return function(dispatch){
        return axios.get(`http://localhost:3001/dog?name=${name}`)
        .then(res => {
            dispatch({type: 'GET_DOGS_BY_BREED', payload: res.data})
        })     
    }
}

export function getDogDetail(id){
    return function(dispatch){
        return axios.get(`http://localhost:3001/dogs/${id}`)
         .then(res => {
             dispatch({type: 'GET_DOG_DETAIL', payload: res.data})
         })
     }
 }

 export function getTemper(){
    return function(dispatch){
        return axios.get(`http://localhost:3001/temperamento`)
         .then(res => {
             dispatch({type: 'GET_TEMPER', payload: res.data})
         })
     }
 }

 export function orderAZ(dogs){
   const az = dogs.sort((a,b) => a > b?1:-1)
   return {
        type:'ORDER_AZ',
        payload: az
    }
 }

 export function orderZA(dogs){
    const za = dogs.sort((a,b) => a < b?1:-1)
    return {
         type:'ORDER_ZA',
         payload: za
     }
  }

  export function orderAZSearch(dogs){
    const azSearch = dogs.sort((a,b) => a > b?1:-1)
    return {
         type:'ORDER_AZ_SEARCH',
         payload: azSearch
     }
  }
  export function orderZASearch(dogs){
    const zaSearch = dogs.sort((a,b) => a < b?1:-1)
    return {
         type:'ORDER_ZA_SEARCH',
         payload: zaSearch
     }
  }

  export function filterTemper(dogs, value){
    const filter = dogs.filter( x => x.temper === value)
    return {
         type:'TEMPER_FILTER',
         payload: filter
     }
  }
  export function filterTemperSearch(dogs, value){
    const filter = dogs.filter( x => x.temper === value)
    return {
         type:'TEMPER_FILTER_SEARCH',
         payload: filter
     }
  }

//   export function a(){
//       return function(dispatch){
//         axios.get(`http://localhost:3001/temperamento`)
//       }
//   }