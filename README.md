# Travila - Travel Booking Website

A modern, responsive travel booking website built with HTML, CSS (Tailwind), and vanilla JavaScript.

## Features

- Hero section with dynamic image carousel
- Advanced search functionality for tours, hotels, and rentals
- Featured tours and top-rated hotels
- Car rental showcase with slider
- News and travel tips section
- Multiple payment method support
- Fully responsive design
- Smooth animations and transitions

## Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- JavaScript (ES6+)
- Google Fonts (Roboto)

## Project Structure

```
frontend/responsive-interactive-web/
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── assets/
│   └── images/
├── dist/
│   └── output.css
├── src/
│   ├── css/
│   │   ├── components.css
│   │   ├── tailwind.css
│   │   └── utilities.css
│   └── js/
│       ├── api.js
│       ├── components.js
│       └── index.js
└── node_modules/
```

## Setup

1. Clone the repository
```bash
git clone <repository-url>
cd frontend/responsive-interactive-web
```

2. Install dependencies
```bash
npm install
```

3. Ensure all images are placed in the `assets/images/` folder

4. Open `index.html` in your browser

## Creating CSS Files via Terminal

If you need to recreate the CSS structure:

**Windows (PowerShell):**
```powershell
New-Item -Path "src/css" -ItemType Directory -Force
New-Item -Path "src/css/components.css" -ItemType File
New-Item -Path "src/css/tailwind.css" -ItemType File
New-Item -Path "src/css/utilities.css" -ItemType File
```

## Usage

Simply open the `index.html` file in any modern web browser to view the website.
