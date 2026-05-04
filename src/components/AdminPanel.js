import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminPanel = ({ products, addProduct, deleteProduct, updateProduct }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    price: ""
  });

  const handleAdd = () => {
    addProduct(form);
    setForm({ name: "", description: "", image: "", price: "" });
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      {/* Add Product */}
      <input className="form-control" placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      <input className="form-control" placeholder="Description"
        value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })}
      />
      <input className="form-control" placeholder="Image URL"
        value={form.image}
        onChange={e => setForm({ ...form, image: e.target.value })}
      />
      <input className="form-control" placeholder="Price"
        value={form.price}
        onChange={e => setForm({ ...form, price: e.target.value })}
      />

      <button onClick={handleAdd}>Add</button>

      {/* Product List */}
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <Link to={`/products/${p.id}`}>{p.name}</Link>

            <button
              className="float-right"
              onClick={() => deleteProduct(p.id)}
            >
              Delete
            </button>

            <button
              className="float-right"
              onClick={() =>
                updateProduct({ ...p, price: Number(p.price) + 1000 })
              }
            >
              Edit Price
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
