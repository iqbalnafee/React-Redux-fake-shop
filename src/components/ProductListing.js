import React,{useEffect}  from 'react';
import { useSelector,useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions';

const ProductListing = () => {

    //we have to fetch the product that we have in our redux store
    //In order to get the access in redux store we are gonna use useSelector

    // React Redux offers a set of Hooks as an alternative to the existing connect() higher order component. These Hooks allow you to connect to the Redux store and dispatch actions without having to wrap your components in connect().

    //The equivalent of map state to props is useSelector

    //It takes in a function argument that returns the part of the state that you want

    // const products = useSelector(state => state);
    // console.log(products);

    const products = useSelector(state => state);

    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
                                        .catch(err => {
                                            console.log(err);
                                        });
                                        
        //Now we need to add this data to our redux store. Hence we will call our setProducts action and then this action will dispatch this action to the reducer

        //FLOW: action->dispatch to reducer
        dispatch(setProducts(response.data));

    }
    useEffect(() => {
        fetchProducts();
    },[]);

    console.log(products);

    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing
