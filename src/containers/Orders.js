import React, { useState, useEffect } from "react";
import "../styles/Orders.css";
import { db } from "../firebase";
import { connect } from "react-redux";
import Order from "../component/Order";

function Orders({ user }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc("user?.uid")
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

const maStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(maStateToProps, null)(Orders);
