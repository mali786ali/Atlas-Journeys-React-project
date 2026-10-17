import { useEffect } from "react";
import { Icon } from "./Icons.jsx";
export default function PackageModal({ item, onClose, onBook }) {
  useEffect(() => {
    if (!item) return;
    const handleKey = (event) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", handleKey); document.body.style.overflow = ""; };
  }, [item, onClose]);
  if (!item) return null;
  return <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
    <section className="package-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button className="modal-close" onClick={onClose} aria-label="Close details"><Icon name="close" size={21} /></button>
      <div className="modal-image"><img src={item.image} alt={`${item.destination} landscape`} /><span className="package-label">{item.label}</span></div>
      <div className="modal-content">
        <span className="eyebrow">{item.destination} · {item.duration}</span><h2 id="modal-title">{item.name}</h2><p>{item.summary}</p>
        <div className="modal-price">From <strong>${item.price.toLocaleString()}</strong> <span>per person</span><span className="modal-rating"><Icon name="star" size={15} /> {item.rating} ({item.reviews} reviews)</span></div>
        <div className="modal-columns"><div><h3>A taste of the itinerary</h3><ul>{item.itinerary.map((day) => <li key={day}><span className="check-dot"><Icon name="check" size={13} /></span>{day}</li>)}</ul></div><div><h3>Included in your trip</h3><ul>{item.includes.map((inc) => <li key={inc}><span className="check-dot"><Icon name="check" size={13} /></span>{inc}</li>)}</ul></div></div>
        <button className="button button-primary modal-book" onClick={() => onBook(item)}>Make this journey yours <Icon name="arrow" size={17} /></button>
        <small className="modal-footnote">A real person will help tailor the details. No payment required to enquire.</small>
      </div>
    </section>
  </div>;
}