import { useState,useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({onSearch}) {
  const [val,setValue]=useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(val); 
    }, 500);

    return () => clearTimeout(timer);
  }, [val, onSearch]);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        <div className="logo">Fictional-Dollop</div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <input className="searchbar" type="search" placeholder="Type here" value={val} onChange={(e) => {setValue(e.target.value)}}/>
        <button className="login-btn">Login</button>
      </nav>
    </header>
  );
}
