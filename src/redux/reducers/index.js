import { combineReducers } from "redux";
import { productReducer,selectedProductReducer } from "./productReducer";

const reducers = combineReducers (

    {
        allproducts:productReducer, //key value pair
        product:selectedProductReducer,
    }

);

export default reducers;