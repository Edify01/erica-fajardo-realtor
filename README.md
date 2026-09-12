# Erica Fajardo · REALTOR® — Website

A high-end, conversion-focused single-page website for Erica Fajardo, REALTOR® serving Bakersfield, CA.

## Highlights
- Elegant copper/terracotta + cream branding matching Erica's marketing.
- Fully responsive (desktop, tablet, mobile) with a mobile slide-in menu and a floating Call/Email quick bar.
- Conversion-first: prominent click-to-call and click-to-email everywhere.
- Accessible, validated contact form that opens the visitor's email app pre-filled (no backend required).
- Smooth scroll-reveal animations (respects `prefers-reduced-motion`).

## Run it
No build step needed. Just open `index.html` in a browser, or serve locally:

```bash
cd EricaRealtor-Website
python3 -m http.server 5500
```

Then visit http://localhost:5500

## Structure
```
EricaRealtor-Website/
├── index.html        # Page markup & content
├── css/styles.css    # All styling & responsive rules
└── js/main.js        # Nav, scroll reveal, form validation
```

## Customize
- **Photos:** Replace the Unsplash placeholder URLs in `css/styles.css` (`.hero` and `.about-photo`) with Erica's real hero and portrait images.
- **Contact info:** Phone, email, and address live in `index.html` — search for `6617787051`, `Ericafajardorealtor@gmail.com`, and `4550 California Ave`.
- **Form delivery:** Currently uses `mailto:`. To capture leads server-side, connect the form to a service like Formspree or Netlify Forms.

## Fonts & assets
- Google Fonts: Cormorant Garamond, Montserrat, Parisienne (loaded via CDN).
- Icons are inline SVG — no icon library dependency.
- Placeholder photography from Unsplash (free to use).
