import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import { useData } from "./context/DataProvider";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";

function App() {
  const { dispatch } = useData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("products.json");
        dispatch({ type: "LOAD_PRODUCTS", payload: data.products });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return loading ? (
    <div className="position-center">
      <Loader type="Oval" color="#2874f0" height={80} width={80} />
    </div>
  ) : (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
