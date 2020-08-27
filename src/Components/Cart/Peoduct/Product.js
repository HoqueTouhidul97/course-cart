import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props);
    const { image, name, instructor,price} = props.product;
    return (
        <div className="product">
             <div className="resize">
                <img src={image} alt="" />
            </div>
            <div className="presenting">
                <h2 className="Course-Name">{name}</h2>
                <h4>Instructed By: {instructor}</h4>
                <p>${price}</p>
                <button className="main-button"
                 onClick={()=> props.handleAddProduct(props.product)}
                > add to cart </button>
                </div>

        </div>
    );
};

export default Product;