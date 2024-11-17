import React, { useContext } from "react";
import "./Product.css";
import ShoppingContext from "../Context/Shopping/shoppingContext";

const Product = ({ id, image, title, rating, price }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { addToBasket, basket } = shoppingContext;
  
  const addToBasketHandler = () => {
    console.log(basket)
    addToBasket({ id, image, title, rating, price });
  };
  return (
    <div className="product" key={id}>
      <img src={image} alt="" />
      <div className="product_info">
        <p>{title}</p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <div className="product_price"><small>R</small><strong>{price}</strong></div>
      </div>
      <button className="product_button" onClick={addToBasketHandler}>
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
