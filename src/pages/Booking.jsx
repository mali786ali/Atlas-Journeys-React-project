import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import BookingForm from "../components/BookingForm.jsx";
import { Icon } from "../components/Icons.jsx";
export default function Booking() {
  const location = useLocation();
  const destination = new URLSearchParams(location.search).get("destination") || "";
  return <>
    <Navbar />
    <main className="booking-page">
      <section className="booking-hero"><div className="wrap booking-hero-inner"><div><span className="eyebrow"><span className="eyebrow-line" /> EVERY GREAT TRIP STARTS SOMEWHERE</span><h1>Tell us what<br />you're <em>dreaming of.</em></h1><p>A faraway place, a long-overdue break, or just the feeling of being somewhere new. We're listening.</p><div className="booking-trust"><span><Icon name="check" size={15} /> No pressure, ever</span><span><Icon name="check" size={15} /> Made around you</span></div></div><div className="booking-hero-image"><img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=85" alt="Sunlight falling across a peaceful mountain valley" /><div className="booking-image-note"><span>✳</span><span><strong>Start with a feeling.</strong><small>We'll figure out the rest.</small></span></div></div></div></section>
      <section className="wrap booking-layout"><div className="booking-aside"><span className="eyebrow">A NOTE FROM US</span><h2>Travel should<br />feel like <em>you.</em></h2><p>No generic packages forced into your plans. Just a thoughtful conversation about what matters to you, and a journey built around it.</p><div className="aside-points"><div><span className="aside-point-icon">01</span><span><strong>Tell us the big idea</strong><small>Even if it's just a place or a feeling.</small></span></div><div><span className="aside-point-icon">02</span><span><strong>We'll shape the details</strong><small>Local insight, considered pace, your budget.</small></span></div><div><span className="aside-point-icon">03</span><span><strong>You take it from here</strong><small>No pressure. Just possibilities.</small></span></div></div><div className="direct-contact"><span className="contact-icon"><Icon name="calendar" size={19} /></span><span><strong>Rather talk it through?</strong><small>We're happy to start with a conversation.</small><a href="mailto:hello@atlasjourneys.example">hello@atlasjourneys.example</a></span></div></div><div className="booking-form-card"><BookingForm initialDestination={destination} /></div></section>
      <section className="booking-bottom-note"><span>✳</span><p>Good journeys aren't rushed. Neither is planning one.</p><Link to="/tours">Need a little inspiration first? <strong>Explore our journeys ↗</strong></Link></section>
    </main>
    <Footer />
  </>;
}