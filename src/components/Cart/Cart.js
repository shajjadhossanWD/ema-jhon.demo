import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    let total = 0 ;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping+ product.shipping;
    }
    const tax = total * 0.10
    const discount = total * 0.05;
    const grandTotal = total + shipping + tax;
    const finalTotal = grandTotal - discount;
    
    return (
        <div className="container mt-4 cart">
               <div className="pricing">
                  <div className="cart_head">
                  <h4>Order Summary.</h4>
                   <h5>Items ordered: {cart.length}</h5>
                  </div>
                   <p>Items Price: <span>$ {total.toFixed(2)}</span></p>
                   <p> Shipping & Handling: <span>$ {shipping.toFixed(2)}</span></p>
                   <p> Total tax : <span>$ {tax.toFixed(2)}</span></p>
                   <p>Discount offer : <span>${discount.toFixed(2)}</span></p>
                   <p><b>Final Total: <span>$ {finalTotal.toFixed(2)}</span></b></p>
               </div>
        </div>
    );
};

export default Cart;