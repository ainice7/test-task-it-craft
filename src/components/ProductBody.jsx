import React from 'react';

export const ProductBody = ({ product }) => {
    return (
        <React.Fragment>
            <img src={product.image} alt="product"/>
            <div className="product-info" >
                <div>{product.name}</div>
                <div>{product.price}</div>
            </div>
        </React.Fragment>
    )
};