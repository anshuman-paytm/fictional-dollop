import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className="logo">MyApp</div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <button className="login-btn">Login</button>
      </nav>
    </header>
  );
}
