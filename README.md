# Travila - Travel Booking Website

A modern, responsive travel booking website that provides a seamless experience for browsing tours, hotels, car rentals, and travel content.

## 📸 Screenshots

### Homepage Hero Section
<img width="1887" height="1029" alt="image" src="https://github.com/user-attachments/assets/13560ef6-dcd4-404a-b7a9-ded82450737e" />


### Featured Tours

<img width="1883" height="1027" alt="image" src="https://github.com/user-attachments/assets/44334acf-d461-44fe-a4d2-ebc159ed66c3" />



### Promotions

<img width="1892" height="1017" alt="image" src="https://github.com/user-attachments/assets/3e44ce17-9ae5-4899-b9fd-4c6e30cdc398" />



### Luxury Travel

<img width="1893" height="1023" alt="image" src="https://github.com/user-attachments/assets/d88558e4-16c8-4c93-a377-7d61d5bd0ed2" />

### News Tips

<img width="1903" height="1033" alt="image" src="https://github.com/user-attachments/assets/33a8a0a9-dd65-42d0-8138-76562c367f55" />


---

## 🚀 Setup Steps

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Modern web browser (Chrome, Firefox, Safari, or Edge)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd frontend/responsive-interactive-web
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up the project structure**

Ensure your folder structure matches:
```
frontend/responsive-interactive-web/
├── index.html
├── assets/images/
├── src/
│   ├── css/
│   └── js/
```


4. **Run the project**

   Simply open `index.html` in your browser:
   ```bash
   # On Windows
   start index.html
   ```
---

## 🛠️ Tech Stack Used

### Frontend
- **HTML5** - Semantic markup structure
- **CSS3** - Custom styling and animations
- **Tailwind CSS v3** - Utility-first CSS framework (via CDN)
- **JavaScript (ES6+)** - Interactive functionality and DOM manipulation

### Fonts & Icons
- **Google Fonts** - Roboto font family
- **Emoji Icons** - Native emoji support for icons

### Development Tools
- **VS Code** - Code editor
- **Git** - Version control

### External Libraries
- Tailwind CSS CDN: `https://cdn.tailwindcss.com`
- Google Fonts CDN: `https://fonts.googleapis.com`

---

## 📁 Project Structure

```
frontend/responsive-interactive-web/
├── index.html                 # Main HTML file
├── package.json              # Node dependencies
├── package-lock.json         # Locked versions
├── README.md                 # Project documentation
├── assets/
│   └── images/              # All image assets
│       ├── logo.png
│       ├── tour1-3.png
│       ├── hotel1-3.png
│       ├── car1-4.png
│       └── ...
├── dist/
│   └── output.css           # Compiled CSS (if using build process)
├── src/
│   ├── css/
│   │   ├── components.css   # Component-specific styles
│   │   ├── tailwind.css     # Tailwind configurations
│   │   └── utilities.css    # Utility classes
│   └── js/
│       ├── api.js           # API calls (if applicable)
│       ├── components.js    # Reusable JS components
│       └── index.js         # Main JavaScript file
└── node_modules/            # Dependencies (not committed)
```

---


---

## ✨ Features Implemented

### Core Features
- ✅ Responsive navigation bar with mobile menu
- ✅ Hero section with parallax background effect
- ✅ Advanced search form with multiple filters (Tours, Hotels, Tickets, Rental, Activities)
- ✅ Featured tours grid with ratings and reviews
- ✅ Tour categories showcase (8 categories)
- ✅ Top-rated hotels with slider functionality
- ✅ Promotional banners
- ✅ Car rental section with detailed specifications
- ✅ News and blog section with animated cards
- ✅ Testimonials section
- ✅ Newsletter subscription
- ✅ Comprehensive footer with sitemap
- ✅ Scroll-to-top button

### Bonus Features
- ⭐ **Smooth Scroll Animations**: Cards animate into view on scroll
- ⭐ **Image Hover Effects**: Zoom and scale effects on images
- ⭐ **Interactive Sliders**: Custom-built sliders for hotels and cars with navigation arrows
- ⭐ **Category Hover Animations**: Smooth transitions on category cards
- ⭐ **Sticky Navigation**: Header stays visible while scrolling
- ⭐ **Wishlist Functionality**: Heart icons for favoriting items (UI only)
- ⭐ **Multi-tab Search Interface**: Tabbed interface for different booking types
- ⭐ **Payment Method Display**: Showcase of accepted payment methods
- ⭐ **Gradient Backgrounds**: Modern gradient designs on feature cards
- ⭐ **Fixed Background Hero**: Parallax effect on hero section
- ⭐ **Custom Border Radius**: Rounded corners throughout for modern look
- ⭐ **Shadow Effects**: Elevation effects with hover interactions

### Technical Highlights
- 🔧 Pure vanilla JavaScript (no jQuery dependency)
- 🔧 CSS Grid and Flexbox layouts
- 🔧 Mobile-first responsive design
- 🔧 Semantic HTML5 structure
- 🔧 Optimized for performance
- 🔧 Clean and maintainable code structure

---

## 📝 Additional Notes

### Creating CSS Files via Terminal

If you need to recreate the CSS structure:


**Windows (PowerShell):**
```powershell
New-Item -Path "src/css" -ItemType Directory -Force
New-Item -Path "src/css/components.css" -ItemType File
New-Item -Path "src/css/tailwind.css" -ItemType File
New-Item -Path "src/css/utilities.css" -ItemType File
```

