import { Icon } from "./Icons.jsx";
export default function PackageCard({ item, onDetails, onBook }) {
  return <article className="package-card">
    <button className="package-image-button" onClick={() => onDetails(item)} aria-label={`View ${item.name} details`}>
      <img src={item.image} alt={`${item.destination} travel scenery`} loading="lazy" />
      <span className="package-label">{item.label}</span><span className="image-arrow"><Icon name="arrow" size={18} /></span>
    </button>
    <div className="package-body">
      <div className="package-meta"><span><Icon name="pin" size={14} /> {item.destination}, {item.country}</span><span className="rating"><Icon name="star" size={14} /> {item.rating} <small>({item.reviews})</small></span></div>
      <button className="package-title" onClick={() => onDetails(item)}>{item.name}</button>
      <p>{item.summary}</p>
      <div className="package-bottom"><span className="package-duration">{item.duration}</span><span className="package-price"><small>from</small> ${item.price.toLocaleString()} <small>/ person</small></span></div>
      <button className="package-book-link" onClick={() => onBook(item)}>View journey <Icon name="arrow" size={16} /></button>
    </div>
  </article>;
}