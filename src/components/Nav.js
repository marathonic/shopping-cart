import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "../style.css";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Hollywander's
      </Link>
      <ul>
        <Link to="/shop">Shop all</Link>
        <Link to="/cart">Cart</Link>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Nav;
