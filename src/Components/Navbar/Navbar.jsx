import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="cart">Cart</Link>
            <Link to="/orders">Orders</Link>
        </div>
    )
}
export default Navbar;