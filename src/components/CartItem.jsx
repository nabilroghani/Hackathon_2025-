import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartItem({ item }) {
  const { removeFromCart, updateQty } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div>
        <h4>{item.title}</h4>
        <p>${item.price}</p>
        <div className="qty-controls">
          <button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
        </div>
        <button onClick={() => removeFromCart(item.id)}>🗑 Remove</button>
      </div>
    </div>
  );
}
