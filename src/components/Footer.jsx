import "./Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Fashion Fusion</h3>
        <p>
          Delicious meals, fast delivery, and great prices — your hunger ends
          here!
        </p>

        <nav className="footer-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/checkout">Checkout</NavLink>
        </nav>

        <p className="copy">
          © {new Date().getFullYear()} Fashion Fusion Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
