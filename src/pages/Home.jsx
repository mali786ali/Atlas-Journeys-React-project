import { Link } from "react-router-dom";
import { destinations, packages, testimonials } from "../data/travelData.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import DestinationCard from "../components/DestinationCard.jsx";
import PackageCard from "../components/PackageCard.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { Icon } from "../components/Icons.jsx";

export default function Home({ onDetails, onBook }) {
  return <>
    <Navbar />
    <main>
      <section className="hero wrap">
        <div className="hero-copy"><span className="eyebrow"><span className="eyebrow-line" /> TRAVEL, WITH A LITTLE MORE SOUL</span><h1>Find your<br /><em>somewhere.</em></h1><p>Thoughtful journeys for the places you've dreamed of — and the moments you didn't see coming.</p><div className="hero-actions"><Link to="/tours" className="button button-primary">Explore our journeys <Icon name="arrow" size={17} /></Link><Link to="/booking" className="button button-quiet">Make it personal <span>↗</span></Link></div><div className="hero-proof"><div className="avatar-stack"><span>J</span><span>M</span><span>A</span><span>+</span></div><div><div className="proof-stars">★★★★★ <strong>4.9/5</strong></div><small>Loved by 2,400+ curious travellers</small></div></div></div>
        <div className="hero-visual"><img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1500&q=90" alt="A serene turquoise alpine lake surrounded by mountains" fetchPriority="high" /><div className="hero-image-overlay" /><div className="hero-photo-caption"><span className="caption-dot" /><span><strong>Somewhere in Switzerland</strong><small>For the moments that stay</small></span><span className="caption-arrow">↗</span></div><div className="floating-note"><span className="note-icon">✳</span><span><strong>Not just a trip.</strong><small>A story you'll tell.</small></span></div><span className="hero-index">01 <i /> 06</span></div>
        <div className="hero-bottom-line"><span>MADE FOR THE WAY YOU WANT TO FEEL</span><span>✳ &nbsp; GO A LITTLE FURTHER</span></div>
      </section>

      <section className="trust-strip"><div className="wrap trust-inner"><div><strong>01</strong><span>Thoughtfully<br />curated stays</span></div><div><strong>02</strong><span>Local people,<br />real connections</span></div><div><strong>03</strong><span>Room to wander,<br />never rushed</span></div><div className="trust-end"><span>THE WORLD IS WIDE.<br /><em>Let's meet it well.</em></span><span className="trust-sun">✳</span></div></div></section>

      <section className="section wrap destinations-section"><SectionHeading eyebrow="A PLACE TO BEGIN" title="Where to next?" description="A few places we're thinking about lately. Each one has a way of getting under your skin." link="/tours" /><div className="destination-grid">{destinations.slice(0, 4).map((destination, i) => <DestinationCard key={destination.id} destination={destination} index={i} />)}</div></section>

      <section className="manifesto-section"><div className="wrap manifesto-inner"><div className="manifesto-mark">“</div><div><span className="eyebrow">THE ATLAS WAY</span><h2>Less checklist.<br /><em>More feeling.</em></h2></div><div className="manifesto-copy"><p>We believe the best journeys aren't measured in landmarks ticked off. They're in the long lunch, the unexpected turn, the person who makes a place feel like yours.</p><Link to="/booking" className="text-link">Travel the Atlas way <span>↗</span></Link></div></div><div className="manifesto-decoration">GO SOMEWHERE THAT MOVES YOU · GO SOMEWHERE THAT MOVES YOU ·</div></section>

      <section className="section wrap featured-section"><SectionHeading eyebrow="GOOD PLACES, GOOD PACE" title="Journeys worth the miles." description="Small-group escapes and considered itineraries, with enough breathing room to make them your own." link="/tours" /><div className="package-grid">{packages.slice(0, 3).map((item) => <PackageCard key={item.id} item={item} onDetails={onDetails} onBook={onBook} />)}</div><div className="center-action"><Link to="/tours" className="button button-outline">See all journeys <Icon name="arrow" size={16} /></Link></div></section>

      <section className="offer-section"><div className="offer-image"><img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1300&q=85" alt="Colourful coastal villages along the Italian Riviera" loading="lazy" /><span className="offer-image-label">THE ART OF TAKING YOUR TIME</span></div><div className="offer-copy"><span className="eyebrow">A LITTLE SOMETHING EXTRA</span><h2>Your next story<br />comes with <em>15% off.</em></h2><p>Make room for a change of scenery. Take 15% off selected journeys when you enquire about your next escape.</p><span className="offer-code">A LITTLE MORE ELSEWHERE <b>·</b> ATLAS15</span><Link to="/booking" className="button button-primary">Find your escape <Icon name="arrow" size={16} /></Link><small>Terms apply to selected journeys. Mention ATLAS15 in your enquiry.</small></div></section>

      <section className="section wrap testimonials-section"><SectionHeading eyebrow="NOT JUST OUR WORD" title="Stories that came home." description="The best recommendations come from people who've been there." /><div className="testimonial-grid">{testimonials.map((item) => <article className="testimonial-card" key={item.initials}><div className="testimonial-stars">★★★★★</div><blockquote>“{item.quote}”</blockquote><div className="testimonial-person"><span className="person-avatar">{item.initials}</span><span><strong>{item.name}</strong><small>{item.trip}</small></span><span className="verified"><Icon name="check" size={13} /> TRAVELLED WITH US</span></div></article>)}</div></section>

      <section className="closing-cta"><div className="closing-cta-image"><img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85" alt="A winding trail leading into a dramatic open landscape" loading="lazy" /></div><div className="closing-cta-content"><span className="eyebrow">THE WORLD IS CALLING, QUIETLY</span><h2>Ready to feel<br /><em>somewhere else?</em></h2><p>Tell us what you're dreaming of. We'll help you find a way there.</p><Link to="/booking" className="button button-light">Let's plan something <Icon name="arrow" size={17} /></Link></div></section>
    </main>
    <Footer />
  </>;
}