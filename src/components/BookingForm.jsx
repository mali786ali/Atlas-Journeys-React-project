import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Icon } from "./Icons.jsx";
import { packages } from "../data/travelData.js";

const initialForm = { name: "", email: "", phone: "", destination: "", date: "", travellers: "2", notes: "" };
export default function BookingForm({ initialDestination = "" }) {
  const location = useLocation();
  const [values, setValues] = useState({ ...initialForm, destination: initialDestination || new URLSearchParams(location.search).get("destination") || "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const update = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };
  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.phone.trim() || values.phone.trim().length < 7) next.phone = "Add a phone number we can reach you on.";
    if (!values.destination) next.destination = "Choose a destination to get started.";
    if (!values.date) next.date = "Choose your ideal departure date.";
    if (values.date && values.date < new Date().toISOString().slice(0, 10)) next.date = "Please choose today or a future date.";
    if (!values.travellers || Number(values.travellers) < 1 || Number(values.travellers) > 20) next.travellers = "Choose 1–20 travellers.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };
  const submit = (event) => {
    event.preventDefault();
    if (validate()) setSubmitted(true);
  };
  if (submitted) return <div className="success-panel" role="status"><span className="success-icon"><Icon name="check" size={27} /></span><span className="eyebrow">ENQUIRY READY</span><h2>That sounds like a good trip.</h2><p>Thanks, {values.name.split(" ")[0]}. Your demo enquiry for <strong>{values.destination}</strong> has been captured on this page.</p><div className="success-summary"><span>Departure</span><strong>{new Date(`${values.date}T12:00:00`).toLocaleDateString(undefined, { day: "numeric", month: "long", year: "numeric" })}</strong><span>Travellers</span><strong>{values.travellers}</strong><span>Reply to</span><strong>{values.email}</strong></div><p className="form-note">This frontend-only portfolio project does not send data to a server.</p><button className="button button-primary" onClick={() => { setValues(initialForm); setErrors({}); setSubmitted(false); }}>Plan another trip <Icon name="arrow" size={16} /></button></div>;
  return <form className="booking-form" onSubmit={submit} noValidate>
    <div className="form-intro"><span className="eyebrow">YOUR NEXT CHAPTER</span><h2>Let's make it happen.</h2><p>Tell us a little about what you're dreaming of. We'll help with the rest.</p></div>
    <div className="form-grid">
      <div className="field"><label htmlFor="name">Your name <span>*</span></label><input id="name" name="name" value={values.name} onChange={update} placeholder="e.g. Alex Morgan" autoComplete="name" aria-invalid={!!errors.name} />{errors.name && <small className="field-error">{errors.name}</small>}</div>
      <div className="field"><label htmlFor="email">Email address <span>*</span></label><input id="email" name="email" type="email" value={values.email} onChange={update} placeholder="alex@example.com" autoComplete="email" aria-invalid={!!errors.email} />{errors.email && <small className="field-error">{errors.email}</small>}</div>
      <div className="field"><label htmlFor="phone">Phone number <span>*</span></label><input id="phone" name="phone" type="tel" value={values.phone} onChange={update} placeholder="+1 202 555 0144" autoComplete="tel" aria-invalid={!!errors.phone} />{errors.phone && <small className="field-error">{errors.phone}</small>}</div>
      <div className="field"><label htmlFor="destination">Where to? <span>*</span></label><select id="destination" name="destination" value={values.destination} onChange={update} aria-invalid={!!errors.destination}><option value="">Choose a destination</option>{packages.map((item) => <option key={item.id} value={item.destination}>{item.destination} — {item.country}</option>)}<option value="Somewhere else">Somewhere else (help me decide)</option></select>{errors.destination && <small className="field-error">{errors.destination}</small>}</div>
      <div className="field"><label htmlFor="date">Ideal departure <span>*</span></label><input id="date" name="date" type="date" min={new Date().toISOString().slice(0, 10)} value={values.date} onChange={update} aria-invalid={!!errors.date} />{errors.date && <small className="field-error">{errors.date}</small>}</div>
      <div className="field"><label htmlFor="travellers">Travellers <span>*</span></label><select id="travellers" name="travellers" value={values.travellers} onChange={update} aria-invalid={!!errors.travellers}>{Array.from({ length: 20 }, (_, i) => <option key={i + 1} value={String(i + 1)}>{i + 1} {i === 0 ? "traveller" : "travellers"}</option>)}</select>{errors.travellers && <small className="field-error">{errors.travellers}</small>}</div>
      <div className="field field-full"><label htmlFor="notes">Anything else we should know? <span className="optional">(optional)</span></label><textarea id="notes" name="notes" value={values.notes} onChange={update} placeholder="Special occasion, travel style, must-see moments..." rows="4" /></div>
    </div>
    <div className="form-submit-row"><p><span>*</span> Required fields. No commitment, just possibilities.</p><button type="submit" className="button button-primary">Send trip enquiry <Icon name="arrow" size={17} /></button></div>
  </form>;
}