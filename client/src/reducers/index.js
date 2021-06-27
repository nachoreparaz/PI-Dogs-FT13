
const initialState = {
    dogs: [],
    searchDogs: [],
    dogsDetail:[],
    getTemper: [],
}

function rootReducer(state = initialState, action){
    switch (action.type){
        case  'GET_INITIAL_DOGS':
            return {
               ...state,
                dogs: action.payload
            }
        case 'GET_DOGS_BY_BREED':
            return {
                ...state,
                searchDogs: action.payload
            }
        case 'GET_DOG_DETAIL':
            return {
                ...state,
                dogsDetail: action.payload
            }
        case 'ORDER_AZ':
            return{
                ...state,
                dogs: action.payload
            }
        case 'ORDER_ZA':
            return{
                 ...state,
                 dogs: action.payload
            }
        case 'GET_TEMPER':
            return{
                ...state,
                getTemper: action.payload
           }
        case 'ORDER_AZ_SEARCH':
            return{
                ...state,
                searchDogs: action.payload
            }
        case 'ORDER_ZA_SEARCH':
            return{
                ...state,
                searchDogs: action.payload
            }
        case 'TEMPER_FILTER':
            return{
                ...state,
                dogs: action.payload
            }
        case 'TEMPER_FILTER_SEARCH':
            return{
                ...state,
                searchDogs: action.payload
            }
        default:
            return state
    }
}
export default rootReducer;