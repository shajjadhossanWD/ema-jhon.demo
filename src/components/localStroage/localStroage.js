const addTodb = (key) =>{
  const exists = localStorage.getItem('Shopping_cart')
  let shopping_cart ={}
  if(!exists){
      shopping_cart[key] = 1;
  }
  else {
      shopping_cart = JSON.parse(exists);
      if(shopping_cart[key]){
          const newCart = shopping_cart[key] + 1;
          shopping_cart[key] = newCart;
      }
      else{
          shopping_cart[key] = 1;
      }
  }
  localStorage.setItem('Shopping_cart', JSON.stringify(shopping_cart));
}


const removeTodb = (key) => {
    const exists = localStorage.getItem('Shopping_cart');
    if(!exists){

    }
    else{
        const shopping_cart = JSON.parse(exists);
        delete shopping_cart[key];
        localStorage.setItem('Shopping_cart', JSON.stringify(shopping_cart));
    }
}

const getStoredCart = () => {
    const exists = localStorage.getItem('Shopping_cart');
    return exists ? JSON.parse(exists) : {} ;
}

const clearTheCart = () =>{
    localStorage.removeItem('Shopping_cart');
}
export {addTodb, removeTodb, getStoredCart, clearTheCart};