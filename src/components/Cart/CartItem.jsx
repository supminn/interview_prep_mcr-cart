import React from "react";
import { useData } from "../../context/DataProvider";

export default function CartItem({ item }) {
  const { dispatch } = useData();

  return (
    <div className="cart-card">
      <div className="image-container">
        <img className="image" src={item.image} alt="product" />
        <div>
          <button
            onClick={() =>
              dispatch({ type: "DECREMENT_QUANTITY", payload: item })
            }
            className="btn-quantity"
          >
            -
          </button>
          <input
            className="txt-quantity"
            value={item.quantity}
            onChange={(e) =>
              dispatch({
                type: "CHANGE_QUANTITY",
                payload: { item: item, quantity: parseInt(e.target.value) },
              })
            }
            type="number"
            step="1"
            min="1"
          />
          <button
            onClick={() =>
              dispatch({ type: "INCREMENT_QUANTITY", payload: item })
            }
            className="btn-quantity"
          >
            +
          </button>
        </div>
      </div>
      <div className="txt-container">
        <span className="name">{item.name}</span>
        <span className="txt-light">Size: {item.size}</span>
        <b>₹{item.price}</b>
        <div>
          {" "}
          <button
            className="btn-navigate"
            onClick={() => dispatch({ type: "SAVE_LATER", payload: item })}
          >
            Save for Later
          </button>
          <button
            className="btn-navigate"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: item })
            }
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
