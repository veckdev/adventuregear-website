# AdventureGear Co. 🏕️

A fully responsive 3-page website for a fictional outdoor gear brand, built with HTML5, CSS3, Bootstrap 5, vanilla JavaScript and jQuery.

**[→ View Live Demo](https://veckdev.github.io/adventuregear-website)**

---

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero section, brand story, interactive gear checklist, featured products |
| Products | `products.html` | Full product grid with category and price range filters |
| Contact | `contact.html` | Contact form with client-side validation |

## Features

- **Responsive layout** — mobile-first, collapses to hamburger menu on small screens
- **Product filtering** — filter by category (Camping / Clothing / Footwear) and price range
- **Gear checklist** — interactive checkbox list with live counter and reset
- **Form validation** — jQuery-powered validation with inline error messages
- **Consistent design system** — shared CSS variables, components and typography across all pages

## Tech Stack

- HTML5 & CSS3
- [Bootstrap 5.3](https://getbootstrap.com/)
- Vanilla JavaScript
- jQuery 3.7 (form validation only)
- Google Fonts — Inter

## Project Structure

```
adventuregear-website/
├── index.html
├── products.html
├── contact.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── images/
```

## Running Locally

No build step required. Just open `index.html` in your browser, or use a local server:

```bash
# VS Code: install Live Server extension, then right-click index.html → Open with Live Server
# Python:
python -m http.server 8000
```

## Notes

- This is a front-end only project — the contact form does not send real emails.
- All product images are sourced from [Pexels](https://www.pexels.com/) (credited in `products.html`).
- Built as part of a Higher Diploma in Science in Computing at [National College of Ireland](https://www.ncirl.ie/).

---

Made by [Veck, the Dev](https://veck.dev) · [github.com/veckdev](https://github.com/veckdev)