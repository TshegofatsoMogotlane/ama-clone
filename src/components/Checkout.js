import "./Checkout.css";
import React, { useContext } from "react";
import ShoppingContext from "../Context/Shopping/shoppingContext";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";



const Checkout = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user } = shoppingContext;
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://m.media-amazon.com/images/I/31+KEhn35VL._AC._SR240,240.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {basket.map((item) => {
            console.log("My di item:",item)
            return(
              <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
            )
          })}
        </div>
      </div>
      <div className="checkout_right"><Subtotal/></div>
    </div>
  );
};

export default Checkout;
