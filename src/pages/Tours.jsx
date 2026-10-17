import { useMemo, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import PackageCard from "../components/PackageCard.jsx";
import PackageModal from "../components/PackageModal.jsx";
import { destinations, packages } from "../data/travelData.js";
import { Icon } from "../components/Icons.jsx";

const categories = ["All journeys", "Beach", "Mountain", "City", "Adventure"];
export default function Tours({ onBook }) {
  const location = useLocation();
  const navigate = useNavigate();
  const queryDestination = new URLSearchParams(location.search).get("destination") || "";
  const [search, setSearch] = useState(queryDestination);
  const [category, setCategory] = useState("All journeys");
  const [budget, setBudget] = useState("any");
  const [sort, setSort] = useState("featured");
  const [activeItem, setActiveItem] = useState(null);
  useEffect(() => { setSearch(queryDestination); }, [queryDestination]);
  const filtered = useMemo(() => {
    let list = packages.filter((item) => {
      const matchesSearch = `${item.name} ${item.destination} ${item.country} ${item.category} ${item.summary}`.toLowerCase().includes(search.toLowerCase().trim());
      const matchesCategory = category === "All journeys" || item.category === category;
      const matchesBudget = budget === "any" || (budget === "under1000" ? item.price < 1000 : budget === "1000to1500" ? item.price >= 1000 && item.price <= 1500 : item.price > 1500);
      return matchesSearch && matchesCategory && matchesBudget;
    });
    if (sort === "price-low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-high") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [search, category, budget, sort]);
  const book = (item) => { setActiveItem(null); onBook(item); };
  return <>
    <Navbar />
    <main className="tours-page">
      <section className="tours-hero"><div className="wrap tours-hero-inner"><div className="tours-hero-copy"><span className="eyebrow"><span className="eyebrow-line" /> THE GOOD KIND OF GETTING LOST</span><h1>Journeys with<br /><em>something to say.</em></h1><p>Not just places to go. Ways to see the world a little differently.</p><div className="tours-hero-meta"><span><Icon name="check" size={15} /> Carefully considered</span><span><Icon name="check" size={15} /> Local-led moments</span><span><Icon name="check" size={15} /> Never one-size-fits-all</span></div></div><div className="tours-hero-photo"><img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1100&q=85" alt="Mountain range stretching into the distance" /><span>FIND YOUR OWN WAY <b>↗</b></span></div></div></section>
      <section className="wrap tour-search-section"><div className="tour-search-card"><div className="tour-search-title"><span className="search-symbol"><Icon name="search" size={20} /></span><span><strong>Where do you want to go?</strong><small>Start with a place, a feeling, or a little curiosity.</small></span></div><div className="tour-search-controls"><label className="search-input-wrap"><Icon name="search" size={18} /><input aria-label="Search destinations and journeys" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Try “beach”, “Japan” or “adventure”" />{search && <button aria-label="Clear search" onClick={() => setSearch("")}><Icon name="close" size={15} /></button>}</label><label className="select-wrap"><span>YOUR BUDGET</span><select value={budget} onChange={(e) => setBudget(e.target.value)} aria-label="Filter by budget"><option value="any">Any budget</option><option value="under1000">Under $1,000</option><option value="1000to1500">$1,000–$1,500</option><option value="over1500">$1,500+</option></select><Icon name="chevron" size={15} /></label></div></div></section>
      <section className="wrap tours-results-section"><div className="tours-results-heading"><div><span className="eyebrow">A WORLD OF POSSIBILITIES</span><h2>Find your kind of <em>away.</em></h2><p>{filtered.length} thoughtfully planned {filtered.length === 1 ? "journey" : "journeys"} to get you started.</p></div><label className="sort-control"><span>Sort by</span><select value={sort} onChange={(e) => setSort(e.target.value)}><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="rating">Top rated</option></select><Icon name="chevron" size={15} /></label></div>
        <div className="category-pills" role="group" aria-label="Filter journeys by category">{categories.map((item) => <button key={item} className={category === item ? "category-pill active" : "category-pill"} onClick={() => setCategory(item)}>{item === "All journeys" ? "✳ " : ""}{item}</button>)}</div>
        {filtered.length ? <div className="package-grid tours-package-grid">{filtered.map((item) => <PackageCard key={item.id} item={item} onDetails={setActiveItem} onBook={book} />)}</div> : <div className="empty-state"><span>✳</span><h3>No journeys found — yet.</h3><p>Try a different destination or loosen the filters. The world is a big place.</p><button className="button button-outline" onClick={() => { setSearch(""); setCategory("All journeys"); setBudget("any"); }}>Clear all filters</button></div>}
      </section>
      <section className="tours-destinations-band"><div className="wrap"><div className="band-heading"><div><span className="eyebrow">A FEW PLACES WE LOVE</span><h2>Let the map surprise you.</h2></div><p>Still deciding? Start with a place that makes you feel something.</p></div><div className="mini-destinations">{destinations.slice(0, 6).map((d) => <button key={d.id} onClick={() => { setSearch(d.name); setCategory("All journeys"); window.scrollTo({ top: 350, behavior: "smooth" }); }}><img src={d.image} alt="" loading="lazy" /><span>{d.name}<small>{d.country}</small></span><Icon name="arrow" size={16} /></button>)}</div></div></section>
      <section className="tours-bottom-cta wrap"><div><span className="eyebrow">CAN'T FIND THE ONE?</span><h2>Let's make a trip<br /><em>that feels like you.</em></h2></div><div><p>Some of the best journeys start with a conversation. Tell us your idea, even if it's only half-formed.</p><Link to="/booking" className="button button-primary">Plan a personal trip <Icon name="arrow" size={17} /></Link></div></section>
    </main>
    <Footer />
    <PackageModal item={activeItem} onClose={() => setActiveItem(null)} onBook={book} />
  </>;
}