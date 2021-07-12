import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const ProductComponent = () => {
    const products = useSelector(state => state.allproducts.products);
    
    const renderItems = products.map( (product) => {
        const {id,title,price,description,category,image} = product;
        return (
            <div className="four wide column" key={id} style={{marginTop:"5%"}} >

                <Link to={`/product/${id}`}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src = { image } alt="" />
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">$ {price}</div>
                            <div className="meta">{category}</div>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        );
    } );

    return (
        <>{renderItems} </>
    )

   
}

export default ProductComponent
