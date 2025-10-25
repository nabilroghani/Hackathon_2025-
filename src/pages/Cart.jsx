import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Cart.css";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const { cart, updateQty, removeFromCart } = useContext(CartContext);

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty 🛒</p>
          <NavLink className="shop-btn" to="/">Continue Shopping</NavLink>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="cart-info">
                  <h4>{item.title}</h4>
                  <p>${item.price.toFixed(2)}</p>

                  <div className="qty-controls">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Payment Summary</h3>
            <p>Subtotal: <span>${subtotal.toFixed(2)}</span></p>
            <p>Tax (5%): <span>${tax.toFixed(2)}</span></p>
            <h4>Total: <span>${total.toFixed(2)}</span></h4>

            <NavLink className="checkout-btn" to="/checkout">
              Proceed to Checkout
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
}
