import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";  // Make sure to import auth from firebase
import Order from "./Order"; // A component to display individual order details

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);  // Local state for the authenticated user

  // Fetch the current user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      // Fetch the orders only if the user is logged in
      db.collection("user")
        .doc(user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [user]);

  if (!user) {
    return <div>Please log in to see your orders.</div>;
  }

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders_list">
        {orders.length > 0 ? (
          orders.map((order) => <Order key={order.id} order={order} />)
        ) : (
          <p>You have no orders yet.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;

