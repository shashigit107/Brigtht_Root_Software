import{configureStore}from "@reduxjs/toolkit"
import{thunk} from"redux-thunk"
import { rootReducer } from "./RootReducer"
const store = configureStore({
    reducer: rootReducer,
    // middleware: [thunk],
    middleware: thunk,
  })
export {store}