import React from "react";
import { useData } from "../../context/DataProvider";
import ProductCard from "./ProductCard";
import "./product.css";

export default function Products() {
  const {
    state: { products },
  } = useData();

  return (
    <div className="grid-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
