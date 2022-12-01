import {combineReducers} from "redux"
import { MovieReducer } from "./reducers/MovieReducer"
const rootReducer=combineReducers({
    MovieReducer:MovieReducer,
})
export {rootReducer}