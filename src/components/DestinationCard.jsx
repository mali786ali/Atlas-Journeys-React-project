import { Link } from "react-router-dom";
import { Icon } from "./Icons.jsx";
export default function DestinationCard({ destination, index = 0 }) {
  return <Link to={`/tours?destination=${encodeURIComponent(destination.name)}`} className={`destination-card destination-card-${index % 3}`}>
    <img src={destination.image} alt={`${destination.name}, ${destination.country}`} loading="lazy" />
    <span className="destination-shade" />
    <span className="destination-topline">{destination.tag}</span>
    <span className="destination-content"><span className="destination-country"><Icon name="pin" size={14} /> {destination.country}</span><strong>{destination.name}</strong><span className="destination-meta">{destination.days} <span className="destination-arrow"><Icon name="arrow" size={18} /></span></span></span>
  </Link>;
}