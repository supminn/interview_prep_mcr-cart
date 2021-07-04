import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/DataProvider";
import "./product.css";

export default function ProductCard({ product }) {
  const {
    state: { cart },
    dispatch,
  } = useData();

  const isAddedToCart = cart.some((item) => item.id === product.id);

  const navigate = useNavigate();

  return (
    <div className="card">
      <img className="image" src={product.image} alt="product" />
      <div className="description">
        <span className="txt-light">{product.brand}</span>
        <span className="name">{product.name}</span>
        <b>₹{product.price}</b>
        <span className="txt-light">Size: {product.size}</span>
        <button
          className={isAddedToCart ? "btn-secondary" : "btn-primary"}
          onClick={() =>
            isAddedToCart
              ? navigate("/cart")
              : dispatch({ type: "ADD_TO_CART", payload: product })
          }
        >
          {isAddedToCart ? "Go to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
