import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartPage from "./components/CartPage";
import Footer from "./components/Footer";
import React, { useState } from 'react';
import products from "./data/products";


export default function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('low-to-high');

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (product) => {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  };

  return (
    <Router>
      <Header cartCount={cart.length} onSearch={setSearchTerm} onSort={setSortOrder} />
      <Routes>
  <Route
    path="/"
    element={
      <ProductList
        products={products}
        addToCart={addToCart}
        searchTerm={searchTerm}
        sortOrder={sortOrder}
      />
    }
  />
  <Route
    path="/cart"
    element={<CartPage cart={cart} onRemoveItem={removeFromCart} />}
  />
</Routes>


      <Footer />
    </Router>
  );
}
