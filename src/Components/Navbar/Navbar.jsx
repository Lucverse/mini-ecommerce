import { useLocation, Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  const location = useLocation();

  return (
    <div className="navbar">
      <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>Home</Link>
      <Link to="/cart" className={location.pathname === "/cart" ? "active-link" : ""}>Cart</Link>
      <Link to="/orders" className={location.pathname === "/orders" ? "active-link" : ""}>Orders</Link>
      <Link to="/login" className={location.pathname === "/login" ? "active-link" : ""}>Login</Link>
    </div>
  );
}

export default Navbar;
