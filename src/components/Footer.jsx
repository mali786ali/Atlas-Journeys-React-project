import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main wrap">
        <div className="footer-brand">
          <Link to="/" className="brand footer-logo"><span className="brand-mark">a.</span><span className="brand-copy"><strong>atlas</strong><small>J O U R N E Y S</small></span></Link>
          <p>Good trips stay with you.<br />We help you find the ones that do.</p>
        </div>
        <div><span className="footer-label">EXPLORE</span><Link to="/tours">All journeys</Link><Link to="/tours">Destinations</Link><Link to="/booking">Custom trip planning</Link></div>
        <div><span className="footer-label">SAY HELLO</span><a href="mailto:hello@atlasjourneys.example">hello@atlasjourneys.example</a><a href="tel:+12025550144">+1 (202) 555-0144</a><span className="footer-muted">Mon–Fri · 9am–6pm</span></div>
        <div className="footer-note"><span className="footer-label">YOUR NEXT CHAPTER</span><p>Somewhere new is closer than you think.</p><Link to="/booking" className="text-link">Start planning <span>↗</span></Link></div>
      </div>
      <div className="footer-bottom wrap"><span>© {new Date().getFullYear()} Atlas Journeys. Made for curious people.</span><span>Thoughtful travel, lighter footprints.</span></div>
    </footer>
  );
}