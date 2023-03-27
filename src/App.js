import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ProductDetails from "./Components/ProductDetails";
import Home from "./Pages/Home";
import Products from "./Pages/Products";

function App() {
  return (
    <Router>
      <Header />
      <main className="mt-24">
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
