# Calculator

A simple browser-based calculator that runs in the browser and can be deployed as a static website.

## Features

- Basic arithmetic: addition, subtraction, multiplication, and division
- Decimal support
- Clear and delete actions
- Responsive design for desktop and mobile devices
- Works as a static site and can be deployed to GitHub Pages or any static hosting service

## Run locally

Open `index.html` directly in a browser, or serve the folder with a local web server:

```bash
git clone https://github.com/sarthaktakalikar-star/Calculator.git
cd Calculator
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Go to your repository settings.
3. Open the "Pages" section.
4. Select "Deploy from a branch".
5. Choose the `main` branch and set the folder to `/` (root).
6. Save the settings.

After a few moments, GitHub will provide a live URL for the site.

## Files

- `index.html` - calculator layout
- `style.css` - styling and responsive layout
- `script.js` - calculator logic and keyboard support

## Usage

- Click the buttons on screen or use your keyboard
- Press `C` to clear the calculator
- Press `DEL` to remove the last entry
- Press `=` to calculate the result

This project is intentionally lightweight so it can be deployed cheaply and run without a backend.

## Summary

This repository is now a deployable live calculator website that anyone can open in a browser.

If you want, you can also extend it with scientific functions, a dark/light theme toggle, or a history panel.
