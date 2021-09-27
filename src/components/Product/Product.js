import React from 'react';
import Rating from 'react-rating';
import './Product.css'
const Product = (props) => {
    const {img,name,price,seller,stock,star,starCount} = props.singleProduct;
    return (
        <div>
            <div className="row products">
                <div className="col-lg-4">
                    <img src={img} alt="" />
                </div>
                <div className="col-lg-8 productDetails">
                  <h4>{name}</h4>
                  <p>Price: ${price}</p>
                  <p>Seller:{seller}</p> 
                  <p className= "rating"> <Rating
                    initialRating={star}
                    emptySymbol="far fa-star rating"
                    fullSymbol="fas fa-star rating"/> 
                    ..Rated({starCount} peoples)</p>
                  <p> <b>Stock in : {stock} only.</b></p>
                  <button onClick={() => props.addToCart(props.singleProduct)} className= "button"><i class="fas fa-cart-plus"></i> add to cart</button>
                  <button onClick={() => props.removeToCart(props.singleProduct)} className= "button ms-3"><i class="fas fa-cart-plus"></i> remove frome cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;