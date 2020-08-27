import React from 'react';
import FakeData from '../../fakedata/FakeData';
import { useState } from 'react';
import Product from '../Cart/Peoduct/Product';
import Cart from '../Cart/Cart';
import './Course.css';


const Course = () => {
   const first14 = FakeData.slice(0,15);
   const [products,setProducts] = useState(first14);
   const [cart,setCart] = useState([]);
   
   const handleAddProduct =(product) => {
    console.log("product added",product);
    const newCart = [...cart,product];
    setCart(newCart);
   }
   
    
    return (
        <div className="shop-container">
             <div className="product-container">
                {
                    products.map(pd =>
                    <Product handleAddProduct = {handleAddProduct}
                        product ={pd}>
                     </Product>)
                    }
                    </div>
            
        <div className="cart-container">
            <Cart cart={cart}></Cart>
        </div>


        </div>
    );
};

export default Course;