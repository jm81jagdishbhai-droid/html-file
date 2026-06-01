// App.jsx

import React from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Stylish Jacket",
      price: "$120",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    },

    {
      id: 2,
      name: "Modern Hoodie",
      price: "$90",
      image:
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500",
    },

    {
      id: 3,
      name: "Classic T-Shirt",
      price: "$45",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500",
    },
  ];

  return (
    <div className="container">

      {/* HEADER */}
      <header className="header">
        <h1>FASHION HUB</h1>

        <nav>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">New</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h2>Trendy Fashion Collection 2026</h2>

          <p>
            Discover colorful modern outfits for your style.
          </p>

          <button>Shop Now</button>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products">

        <h2 className="title">Popular Products</h2>

        <div className="product-grid">
          {products.map((item) => (
            <div className="card" key={item.id}>

              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <p>{item.price}</p>

              <button>Add To Cart</button>

            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Fashion Hub | All Rights Reserved</p>
      </footer>

    </div>
  );
}

export default App;