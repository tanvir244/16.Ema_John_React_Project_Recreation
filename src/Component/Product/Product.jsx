import React from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="content">
                <h4>{name}</h4>
                <p><small>By: {seller}</small></p>
                <h2>${price}</h2>
                <p><small>Only {stock} left in stock</small></p>
                <button 
                className='main-button'
                onClick={() => props.handleAddProduct(props.product)}
                ><span><FontAwesomeIcon icon={faShoppingCart} /></span>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;