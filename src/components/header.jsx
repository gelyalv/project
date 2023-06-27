import React from "react";
import { Link } from "react-router-dom";

export function Header () {
    return (
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <nav className="navbar">
            <ul className="navbar-nav">
              <Link to="/home" className="navbar-link">Home</Link>
              <Link to="/register" className="navbar-link">Register</Link>
              <Link to="/login" className="navbar-link">Login</Link>
              <Link to="/profile" className="navbar-link">Profile</Link>
            </ul>
          </nav>
        </div>
      </nav>
    )
}