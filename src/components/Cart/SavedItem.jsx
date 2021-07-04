import React from "react";
import { useData } from "../../context/DataProvider";

export default function SavedItem({ item }) {
  const { dispatch } = useData();

  return (
    <div className="cart-card">
      <div className="image-container">
        <img className="image" src={item.image} alt="product" />
        <div>
          <button
            disabled={true}
            onClick={() =>
              dispatch({ type: "DECREMENT_QUANTITY", payload: item })
            }
            className="btn-quantity"
          >
            -
          </button>
          <input
            disabled={true}
            className="txt-quantity"
            value={item.quantity}
            onChange={(e) =>
              dispatch({
                type: "CHANGE_QUANTITY",
                payload: { item: item, quantity: e.target.value },
              })
            }
            type="number"
            step="1"
            min="1"
          />
          <button
            disabled={true}
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
          <button
            className="btn-navigate"
            onClick={() => dispatch({ type: "MOVE_TO_CART", payload: item })}
          >
            Move to Cart
          </button>
          <button
            className="btn-navigate"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_SAVED", payload: item })
            }
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
