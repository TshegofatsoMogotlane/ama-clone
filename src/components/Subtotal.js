import React, { useContext } from "react";
import CurrencyFormat from "react-currency-format";
import "./SubTotal.css";
import ShoppingContext from "../Context/Shopping/shoppingContext";
import { useHistory } from "react-router-dom";

const Subtotal = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { basket, getBasketTotal } = shoppingContext;
  const history =useHistory();

  const handleTestTotal=(e)=>{
    e.preventDefault();
  }
  
  return (
    <div className="subtotal"> 
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox"/>This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        prefix={"R"}
      />
      <button onClick={handleTestTotal}>Test Total</button>
      <button className="subtotal_button" onClick={()=>history.push("/payment")}>Proceed to Checkout</button>
    </div>
  );
};


export default Subtotal;
