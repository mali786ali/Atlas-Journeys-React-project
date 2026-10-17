export default function SectionHeading({ eyebrow, title, description, link, linkText = "Explore all trips" }) {
  return <div className="section-heading">
    <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>
    {link && <a className="text-link heading-link" href={link}>{linkText}<span>↗</span></a>}
  </div>;
}