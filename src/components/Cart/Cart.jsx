import React from "react";
import CartData from "./CartData";
import PriceDetails from "./PriceDetails";
import SaveLater from "./SaveLater";

export default function Cart() {
  return (
    <div className="cart-container">
      <div className="cart-components">
        <CartData />
        <SaveLater />
      </div>
      <PriceDetails />
    </div>
  );
}
