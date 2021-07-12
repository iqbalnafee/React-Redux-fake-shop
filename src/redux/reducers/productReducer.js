// Reducer always takes the initial state and action
import { ActionTypes } from "../types/actionTypes";
const initialState = {
    products:[],
};
// Reducer always takes the initial state and action
export const productReducer = (state=initialState, action) => {
    const {type,payload} = action;

    switch (type) {
        case ActionTypes.SET_PRODUCTS:

            return {...state, products: payload};
        default:
            return state;
    }
}

export const selectedProductReducer = (state={}, action) => {
    const {type,payload} = action;

    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        default:
            return state;
    }
}
