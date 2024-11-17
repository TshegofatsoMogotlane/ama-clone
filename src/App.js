import { useContext, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Products from "./components/Products";
import Home from "./components/Home";
import Header from "./components/layout/Header";
import ProductDetails from "./components/layout/ProductDetails";
import Login from "./components/Login";
import OrderReturns from "./components/OrderReturns";
import Prime from "./components/Prime";
import Basket from "./components/Basket";
import NotFound from "./components/NotFound";
import ShoppingContext from "./Context/Shopping/shoppingContext";
import { auth } from "./firebase";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import Orders from "./components/Orders";


const promise = loadStripe(
  "pk_test_51Pgp9A2Li69QpWuxz2xeyOsHX3GhAXfkJD3dLSGlFrTyUMfu7q7Hb8gFarPjYbXrIlZRU9dY9rtfRHWzCJHRZUmn00wGshjNff"
);
const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser } = shoppingContext;
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User is", authUser);
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/order-and-returns">
            <OrderReturns />
          </Route>
          <Route path="/prime">
            <Prime />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path = "/orders">
            <Orders />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
};
export default App;
