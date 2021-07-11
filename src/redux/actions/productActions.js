// In this action file we will create three three actions

// 1. First action for set product
// 2. Second action for selected product
// 3. Third action for remove product

import {ActionTypes} from '../types/actionTypes';

export const setProducts = (products) => {
    //return always return a object
    return {

        type: ActionTypes.SET_PRODUCTS,
        payload: products 

    }
}

export const selectedProduct = (product) => {
    return {

        type:ActionTypes.SELECTED_PRODUCT,
        payload:product

    }
}