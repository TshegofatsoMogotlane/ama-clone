import React from "react";
import CheckoutProduct from "./CheckoutProduct"; // To reuse the CheckoutProduct for order items

const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order # {order.id}</h2>
      <p>Amount: R{order.amount / 100}</p>
      <p>Created: {new Date(order.created * 1000).toLocaleString()}</p>
      <div className="order_items">
        {order.basket.map((item) => (
          <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Order;
