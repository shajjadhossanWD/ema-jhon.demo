import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { addTodb, clearTheCart, getStoredCart, removeTodb } from '../localStroage/localStroage';
import Product from '../Product/Product';
import './Products.css'
const Peoducts = () => {

    const [products, setProducts] = useState([]);
    const [searchProductss, setSearchProductss] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('./product.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setProducts(data)
            setSearchProductss(data);
        })
    },[])

    // for load localStorage data 
    useEffect(() =>{
      if(products.length){
        const showCart = getStoredCart();
        const storedCart = []
        for (const key in showCart){
            const addCartProduct = products.find(product => product.key === key);
            storedCart.push(addCartProduct);
        }
        setCart(storedCart);
      }
    }, [products])
    
    // add cart to shopping cart 
    const addToCart = product =>{
        // console.log(product);
        const adProduct = [...cart, product];
        setCart(adProduct);
        addTodb(product.key)
    }
    const removeToCart = removeProduct =>{
        removeTodb(removeProduct.key)
    }
    
    // search product from all product 
    const searchProduct = (getitem) =>{
        const getValue = getitem.target.value;
        const findProducts = products.filter(product => product.name.toLowerCase().includes(getValue.toLowerCase()));
        setSearchProductss(findProducts);
    }
    return (
        <div className="shop">
        <div className="searchbar">
        <input onChange={searchProduct} type="text" id="inputFild" placeholder='Search your needed product here......'/>
        <i class="fas fa-cart-plus shopping_cart">{cart.length}</i>
        </div>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-7 allProducts">
                   {
                       searchProductss.map(product => <Product 
                       key = {product.key}
                       singleProduct = {product} 
                       addToCart = {addToCart}
                       removeToCart = {removeToCart}
                    />)
                   }
                </div>
                <div className="col-lg-3 ">
                 <Cart cart = {cart}/>
                </div>
            </div>
        </div>
    );
};

export default Peoducts;