import React from "react";
import { useData } from "../../context/DataProvider";
import CartItem from "./CartItem";
import "./cart.css";

export default function CartData() {
  const {
    state: { cart },
  } = useData();

  return cart.length === 0 ? (
    <h2>Cart is empty! Add some products</h2>
  ) : (
    <div className="cartItem-container">
      <h3>My Cart ({cart.length})</h3>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <button className="btn-order">Place Order</button>
    </div>
  );
}
