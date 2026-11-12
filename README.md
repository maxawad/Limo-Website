# Limo-Website

A multi-page website for a fictional limousine and private transport company, called "Evergreen Transportation Network" in the page text. It shows how a car hire business could present its fleet, services, destinations and booking steps online, and it works as a ready-made front end for a chauffeur or airport transfer service.

## What it does

- Home page with a quick transfer search form (one way or return, date and time pickers)
- Pages for services, destinations, tailor-made trips, about, FAQ, blog, contact, login and register
- A three step booking flow (`booking-step1.html` to `booking-step3.html`) and a search results page
- A contact form handled by a small PHP script (`contact_form_message.php`)
- Colour themes in `HTML/css/theme-*.css`, responsive layout, and scroll animations

## Tech stack

HTML, CSS, JavaScript with jQuery (plugins: datetimepicker, uniform, slicknav, WOW.js) and one PHP script for the contact form. There is no build step and nothing to install.

## Repository layout

- `HTML/` the website (this is the part to run or host)
- `Transfers/` the original third party template files, its documentation and archives, kept for reference
- `UI Assets/` logo images

## Run it

The site is plain static files. From the repository root:

```bash
cd HTML
python3 -m http.server 8000
```

Then open http://localhost:8000/. To host it as a live demo, upload the contents of the `HTML/` folder to any static host (GitHub Pages, Netlify and similar). No secrets or API keys are needed.

Optional, for the contact form only: run the site with PHP instead (`php -S localhost:8000` inside `HTML/`) and set the `CONTACT_FORM_TO` environment variable to the address that should receive messages (see `.env.example`). The server also needs a working mail setup. On a static host the contact form will not send anything.

## Status

Prototype. The pages and navigation work as a front end only. Search, booking, login and register do not talk to a back end, and the contact form needs PHP with mail configured. The contact page loads Google Maps without an API key, so the map may show a usage warning.

## Credits

The layout is built on a commercial "Private Transport and Car Hire" HTML template (the original files are in `Transfers/`). The text, branding and logo were customised for this project. Check the template's licence terms before reusing or redistributing the template parts.
