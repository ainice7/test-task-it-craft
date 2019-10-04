import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteFromCart } from '../actions/index';
import { ProductBlock } from '../components/ProductBlock';
import { Button } from 'antd';
import '../assets/css/Cart.css';

const Cart = ({ addedItems, deleteFromCart }) => {

    if(addedItems.length === 0) {
        return (
            <div className="empty-cart" >
                <h1>Nothing added to cart</h1>
                <h2>Add some at <Link to='/market'>market</Link></h2>
            </div>
        )
    }
    
    return (
        <div>
            <h1>Items you've added: </h1>
            <div className={ `shopping-list ${addedItems.length >= 4 ? "shopping-list-jc" : ""}` }>
            {addedItems.map((item, i) => (
                <div key={i} className="product-block" >
                    <ProductBlock product={item} /> 
                    <div className="buttons" >
                        <Button type="danger" size={"large"} onClick={(e) => deleteFromCart(item) } >
                            Delete from Cart
                        </Button>
                    </div>
                </div>
            ))}</div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    addedItems: state.data.addedItems
});

const mapDispatchToProps = {
    deleteFromCart
}

export const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);