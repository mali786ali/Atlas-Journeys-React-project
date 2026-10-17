import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Icon } from "./Icons.jsx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link to="/" className="brand" aria-label="Atlas Journeys home" onClick={closeMenu}>
          <span className="brand-mark">a.</span>
          <span className="brand-copy"><strong>atlas</strong><small>J O U R N E Y S</small></span>
        </Link>
        <button className="mobile-menu-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "close" : "menu"} size={23} />
        </button>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
          <NavLink to="/tours" onClick={closeMenu}>Explore trips</NavLink>
          <NavLink to="/booking" onClick={closeMenu}>Plan your trip</NavLink>
          <Link to="/booking" className="nav-cta" onClick={closeMenu}>Let's talk <Icon name="arrow" size={16} /></Link>
        </nav>
      </div>
    </header>
  );
}