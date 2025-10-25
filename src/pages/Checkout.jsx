import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css"

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0).toFixed(2);
  const [form, setForm] = useState({ name: "", email: "", address: "", city: "", zip: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    clearCart();
    navigate("/");
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        {cart.map((item) => (
          <p key={item.id}>{item.title} x {item.qty}</p>
        ))}
        <h4>Total: ${total}</h4>
      </div>

      <form onSubmit={handleSubmit}>
        <input placeholder="Name" required onChange={(e)=>setForm({...form,name:e.target.value})}/>
        <input type="email" placeholder="Email" required onChange={(e)=>setForm({...form,email:e.target.value})}/>
        <input placeholder="Address" required onChange={(e)=>setForm({...form,address:e.target.value})}/>
        <input placeholder="City" required onChange={(e)=>setForm({...form,city:e.target.value})}/>
        <input placeholder="ZIP" required onChange={(e)=>setForm({...form,zip:e.target.value})}/>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}
