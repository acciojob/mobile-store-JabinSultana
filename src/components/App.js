import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";
import './../styles/App.css';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "iPhone 13", price: 70000, description: "Apple phone", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Samsung S21", price: 60000, description: "Samsung phone", image: "https://via.placeholder.com/150" },
    { id: 3, name: "OnePlus 9", price: 50000, description: "OnePlus phone", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Realme X", price: 20000, description: "Realme phone", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Oppo F19", price: 22000, description: "Oppo phone", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Vivo V21", price: 25000, description: "Vivo phone", image: "https://via.placeholder.com/150" },
    { id: 7, name: "Redmi Note 10", price: 18000, description: "Redmi phone", image: "https://via.placeholder.com/150" },
    { id: 8, name: "Pixel 6", price: 65000, description: "Google phone", image: "https://via.placeholder.com/150" }
  ]);

  // ADD
  const addProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
  };

  // DELETE
  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  // UPDATE
  const updateProduct = (updatedProduct) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <Router>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/admin">Admin Panel</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route path="/products/:id" element={<ProductDetails products={products} />} />
          <Route path="/admin" element={
            <AdminPanel 
              products={products}
              addProduct={addProduct}
              deleteProduct={deleteProduct}
              updateProduct={updateProduct}
            />
          } />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
