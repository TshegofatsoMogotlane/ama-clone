import React, { useContext, useState, useEffect } from "react";
import "./Payment.css";
import ShoppingContext from "../Context/Shopping/shoppingContext";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Stripe from "@stripe/react-stripe-js"
import axios from "../axios";
import { db } from "../firebase";

const Payment = () => {
  //Sates frontend
  const shoppingContext = useContext(ShoppingContext);
  const { basket, user, getBasketTotal, emptyBasket } = shoppingContext;
  //Sates from the backend
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [proccessing, setProccessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  useEffect(() => {
    //Generating a stripe whcj will allow us to charge the customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "POST",
        url: `payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket, getBasketTotal]);


  console.log("client secret is", clientSecret)


  const handleSubmit = async (e) => {
    e.preventDefault();
    setProccessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      })
      .then(({ paymentIntent }) => {
        //payment confirmation
        db.collection("user")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceeded(true);
        setError(null);
        setProccessing(false);
        //emptyBasket basket
        emptyBasket();
        //Redirect the user
        history.push("/orders");;
      });
  };
  console.log("client secret2 is", clientSecret)
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message: "");
  };
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout <Link to="/checkout">{basket?.length} items</Link>
        </h1>
      </div>
      <div className="payment_section">
        <div className="payment_title">
          <h3>Delivery Address</h3>
        </div>
        <div className="payment_address">
          <p>{user?.email}</p>
          <p>123 ReactJS Road</p>
          <p>Cape Town, SA</p>
        </div>
      </div>
      <div className="payment_section">
        <div className="payment_title">
          <h3>Review items and Delivery</h3>
        </div>
        <div className="checkout_items">
          {basket.map((item) => {
            return (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
      <div className="payment_section">
        <div className="payment_title">
          <h3>Payment Method</h3>
        </div>
        <div className="payment_details">
          {/*Stripe Code needed here */}
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <div className="payment_price_container">
              <CurrencyFormat
                renderText={(value) => <h3>Oder Total:{value}</h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"R"}
              />
              <button disabled={proccessing || disabled || succeeded}>
                <span>{proccessing ? <p>Processing</p> : "Buy Now"}</span>
              </button>
            </div>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
