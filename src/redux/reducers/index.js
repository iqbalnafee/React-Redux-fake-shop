import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const reducers = combineReducers (

    {
        allproducts:productReducer, //key value pair
    }

);

export default reducers;