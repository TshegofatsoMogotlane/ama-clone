import React, { useContext } from "react";
import ShoppingContext from "../Context/Shopping/shoppingContext";
import "./CheckoutProduct.css";


const CheckoutProduct = ({id, image, title, rating, price, hideButton }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { removeFromBasket } = shoppingContext;
  console.log("CheckoutProduct Props:", { id, image, title, rating, price });
  const removeFromBasketHandler = () => {
    removeFromBasket({id});
  };
  
  return (
    <div className="checkout_product">
      <img className="checkout_product_image" src={image} alt="" />
      <div className="checkout_product_info">
        <p className="checkout_product_title">{title}</p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <div className="checkout_product_price">
          <small>R</small>
          <strong>{price}</strong>
        </div>
        {!hideButton && (
          <button onClick={removeFromBasketHandler}>Remove From Basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
