// App.jsx
import React from "react";
import "./App.css";

function App() {
  const menuItems = [
    { name: "Paneer Tikka", price: "₹260" },
    { name: "Veg Biryani", price: "₹280" },
    { name: "Pav Bhaji", price: "₹180" },
    { name: "Masala Dosa", price: "₹150" },
    { name: "Chhole Bhature", price: "₹220" },
    { name: "Veg Manchurian", price: "₹240" },
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo-section">
          <img
            src="https://png.pngtree.com/templates/20180809/restaurant-logos-png-png_25706.jpg"
            alt="Restaurant Logo"
            className="logo"
          />
          <h1>Ramdev Restaurant</h1>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="overlay">
          <h2>Welcome to Ramdev Restaurant</h2>
          <p>Pure Vegetarian • Delicious Food • Family Dining</p>
          <button>Order Now</button>
        </div>
      </section>

      {/* Ramdev Pir Section */}
      <section className="ramdev-section">
        <img
          src="https://rukminim2.flixcart.com/image/480/640/xif0q/painting/a/x/j/14-1-ramdev-4-jog-craft-original-imagph28fxvvf3zf.jpeg?q=90"
          alt="Ramdev Pir"
          className="ramdev-img"
        />
        <h2>Jai Ramdev Pir</h2>
        <p>
          Enjoy delicious vegetarian food with the blessings of
          Shri Ramdev Pir.
        </p>
      </section>

      {/* Menu Section */}
      <section className="menu" id="menu">
        <h2>Our Special Menu</h2>

        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <p>📍 Khar, Mumbai, Maharashtra</p>
        <p>📞 +91 98765 43210</p>
        <p>📧 ramdevrestaurant@gmail.com</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Ramdev Restaurant | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;