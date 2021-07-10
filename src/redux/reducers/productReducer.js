// Reducer always takes the initial state and action
import { ActionTypes } from "../types/ActionTypes";
const initialState = {
    products:[{
        id:1,
        title:"iqbalnafee",
        category:"SE"
    }]
};
// Reducer always takes the initial state and action
export const productReducer = (state, action) => {
    const {type,payload} = action;

    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}
