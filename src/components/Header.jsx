import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./Header.css";

export default function Header() {
  const { cart } = useContext(CartContext);
  const itemCount = cart.reduce((sum, i) => sum + (i.qty || 0), 0); 

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">🛒 Mini E-Commerce</div>

      {/* Hamburger for mobile */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={menuOpen ? "open" : ""}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>

        <NavLink to="/cart" onClick={() => setMenuOpen(false)}>
          <div className="cart-icon">
            <i className="fa-solid fa-cart-shopping"></i>
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </div>
        </NavLink>
      </nav>
    </header>
  );
}
