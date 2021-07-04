import React from "react";
import "./navigation.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <nav className="nav-container">
      <div className="nav-contents">
        <img
          onClick={() => navigate("/")}
          className="logo"
          src={logo}
          alt="flipkart"
        />
        <div className="search-container">
          <input
            type="text"
            className="text-input"
            placeholder="Search for products, brands and more"
          />
          <i className="fas fa-search text-blue"></i>
        </div>
        <button className="btn-login">Login</button>
        <span className="btn-cart" onClick={() => navigate("/cart")}>
          <i className="fa fa-shopping-cart"></i>Cart
        </span>
      </div>
    </nav>
  );
}
