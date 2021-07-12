import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
    const {productId} = useParams();
    return (
        <div>
            <h2>ProductDetail</h2>
        </div>
    )
}

export default ProductDetail
