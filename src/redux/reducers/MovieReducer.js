
import { Action_type } from "../../constant/Action_type";
const { SET_MOVIE_DATA,
    SET_FILTER_MOVIE_DATA } = Action_type


const intialState = {
    MovieData: [],
    filterData: []
}
// SET_USER_CREDENTIAL
const MovieReducer = (state = intialState, action) => {
 
    switch (action.type) {
        case SET_MOVIE_DATA:
          
            return {
                ...state,
                MovieData: action.payload,
                filterData:action.payload
            }
        case SET_FILTER_MOVIE_DATA:
            return {
                ...state,
                filterData: action.payload
            }

        default:
            return state;
    }
}
export { MovieReducer }