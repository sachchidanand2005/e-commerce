// src/components/ProductDetails.jsx
import { useParams } from 'react-router-dom';
import products from '../data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <p className="product-description">{product.description}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}
