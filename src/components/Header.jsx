import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Header.css";

export default function Header() {
  const { cart } = useContext(CartContext);
  const itemCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <header className="header">
      <div className="logo">🛒 Mini E-Commerce</div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart ({itemCount})</NavLink>
      </nav>
    </header>
  );
}
