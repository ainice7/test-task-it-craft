import React from 'react';
import { connect }  from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'antd'; 

import { ProductBlock } from '../components/ProductBlock';
import '../assets/css/Market.css';
import { addToCart } from '../actions/index';

const ProductsList = ({ products, addToCart, addedItems }) => {
    console.log("products", products);
    
    const buttonSwitch = (product) => {
        if(!addedItems.find((elem) => elem.id === product.id)) {
            return (
                <Button type="primary" size={"large"} onClick={(e) => addToCart(product)} >
                    Add to Cart
                </Button>  
            )
        } else {
            return (
                <Button size={"large"}>
                    <Link to='/cart'>Go to cart</Link>
                </Button>
            )
        }
    }

    return(
        <React.Fragment>
            <h1>Catalog:</h1>
            <div className="products-list" >
                {products.map((item, i) => (
                    <div className="product-block" key={i}>
                        <ProductBlock product={item} />
                        <div className="buttons">
                        {
                            buttonSwitch(item)  
                        }
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
};

const mapStateToProps = (state) => ({
    products: state.data.products,
    addedItems: state.data.addedItems
});

const mapDispatchToProps = {
    addToCart
}

export const Market = connect(mapStateToProps, mapDispatchToProps)(ProductsList);