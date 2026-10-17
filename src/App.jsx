import { useCallback, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Tours from "./pages/Tours.jsx";
import Booking from "./pages/Booking.jsx";
import PackageModal from "./components/PackageModal.jsx";
import { Icon } from "./components/Icons.jsx";

export default function App() {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();
  const bookItem = useCallback((item) => {
    setActiveItem(null);
    navigate(`/booking?destination=${encodeURIComponent(item?.destination || "")}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigate]);
  return <>
    <Routes>
      <Route path="/" element={<Home onDetails={setActiveItem} onBook={bookItem} />} />
      <Route path="/tours" element={<Tours onBook={bookItem} />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="*" element={<main className="not-found wrap"><span className="eyebrow">A LITTLE OFF THE MAP</span><h1>Looks like this path<br /><em>ends somewhere else.</em></h1><a href="/" className="button button-primary">Back to the beginning <Icon name="arrow" size={17} /></a></main>} />
    </Routes>
    <PackageModal item={activeItem} onClose={() => setActiveItem(null)} onBook={bookItem} />
  </>;
}