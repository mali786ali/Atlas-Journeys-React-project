# Atlas Journeys — React + Vite Travel Booking Frontend

A responsive, multi-page travel and tour booking website designed as a polished frontend portfolio project.

## Features
- Three routes: Home, Explore Trips, and Plan Your Trip.
- Responsive navigation with accessible mobile menu.
- Search across journeys, category filters, budget filters, sorting, and useful empty states.
- Reusable destination and tour package cards powered by local JavaScript data.
- Tour details modal with itinerary and inclusions.
- Controlled booking form with inline validation and a success state.
- Query-string prefill when booking a selected package.
- Responsive desktop, tablet, and mobile layouts; focus states and semantic labels.

## Tech
React, Vite, JavaScript/JSX, plain CSS, and `react-router-dom`. No backend, database, payment gateway, or external API is used. The booking success screen is a frontend demo only.

## Run locally
Requires Node.js and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To test a production build:

```bash
npm run build
npm run preview
```

## Project structure
```text
src/
  components/   Navbar, Footer, cards, modal, form, icons, section heading
  data/         Local destination, package, and testimonial data
  pages/        Home, Tours, Booking
  App.jsx
  main.jsx
  index.css
```

## Image credits
Destination imagery is loaded from Unsplash image URLs. This demo uses remote images for a lightweight project. For production, confirm the license/usage terms for each selected image and download appropriately licensed optimized files into `src/assets`.

## Portfolio description
Atlas Journeys is a fictional travel studio for curious travellers who value thoughtful itineraries, local connection, and a more personal pace. Visitors can explore destinations, filter curated journeys, review trip details, and submit a validated trip enquiry through a clean, responsive interface.
