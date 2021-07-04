import React from "react";
import { useData } from "../../context/DataProvider";

export default function PriceDetails() {
  const {
    state: { cart },
  } = useData();

  const calculatedPrice = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  return (
    cart.length > 0 && (
      <div className="detail-container">
        <h2 className="txt-light">Price Details</h2>
        <hr />
        <div className="price-detail-flex">
          <p>Price ({cart.length} items)</p>
          <p>₹{calculatedPrice}</p>
        </div>
        <div className="price-detail-flex">
          <p>Discount</p>
          <p>-₹100</p>
        </div>
        <div className="price-detail-flex">
          <p>Delivery Charge</p>
          <p>FREE</p>
        </div>
        <div className="price-detail-flex text-bold">
          <p>Total Amount</p>
          <p>₹{parseInt(calculatedPrice) - 100}</p>
        </div>
      </div>
    )
  );
}
