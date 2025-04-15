// src/components/Header.jsx
import { useState } from "react";

export default function Header({ cartCount, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">ShopNow</h1>
        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="cart">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </header>
  );
}
