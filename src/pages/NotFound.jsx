import { NavLink } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Page Not Found 😢</h2>
      <p>The page you’re looking for doesn’t exist or has been moved.</p>
      <NavLink to="/" className="back-home">Go Back Home</NavLink>
    </div>
  );
}
