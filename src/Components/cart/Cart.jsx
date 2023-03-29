import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {


    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    let tax = totalPrice*7/100;
    const grandTotal = totalPrice + totalShipping + tax;
    
    return (
        <div className='cart'>
            
            <h3>Order Summary</h3>
            <p>selected items:{cart.length}</p>
            <p>Total Price:{totalPrice.toFixed(2)}</p>
            <p>Total Shipping:{totalShipping.toFixed(2)}$</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <h4>Grand Total:$ {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;