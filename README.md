# Sushil Ramtel — Personal Portfolio

A modern, high-performance personal portfolio website built with **React**, **Tailwind CSS**, and **Framer Motion**. Designed to showcase professional experience, technical skills, and educational background with a clean and elegant user interface.

---

## Overview

This portfolio is a single-page application (SPA) featuring:

- **Smooth tab-based navigation** — About, Experience, Skills, and Education sections
- **Animated transitions** powered by Framer Motion
- **Fully responsive design** — optimized for mobile, tablet, and desktop
- **Optimized performance** — code-split vendor chunks and lazy-loaded sections
- **Dark-themed aesthetic** with glassmorphism and gradient accents

---

## Tech Stack

| Category         | Technology                                      |
|------------------|-------------------------------------------------|
| **Framework**    | React 18                                        |
| **Build Tool**   | Vite 5                                          |
| **Styling**      | Tailwind CSS 3                                  |
| **Animations**   | Framer Motion 11                                |
| **Icons**        | Lucide React                                    |
| **PostCSS**      | Autoprefixer                                    |
| **Deployment**   | GitHub Pages (custom domain via CNAME)          |

---

## Project Structure

```
personal-portfolio/
├── public/                   # Static public assets
├── pic/                      # Profile and media images
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar with active tab state
│   │   ├── Hero.jsx          # About / landing section
│   │   ├── Experience.jsx    # Work experience timeline
│   │   ├── Skills.jsx        # Technical skills grid
│   │   └── Education.jsx     # Educational background
│   ├── data/
│   │   └── resumeData.js     # Centralized data source (single source of truth)
│   ├── App.jsx               # Root component with tab routing & layout
│   ├── main.jsx              # React DOM entry point
│   └── index.css             # Global styles and Tailwind directives
├── index.html                # HTML entry point
├── vite.config.js            # Vite & build configuration
├── tailwind.config.js        # Tailwind theme customization
├── postcss.config.js         # PostCSS configuration
├── CNAME                     # Custom domain for GitHub Pages
└── package.json              # Project dependencies & scripts
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** — `v18.x` or higher ([Download](https://nodejs.org))
- **npm** — `v9.x` or higher (bundled with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Sushil113/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in your browser**

   Navigate to [http://localhost:5173](http://localhost:5173) to view the portfolio locally.

---

## Available Scripts

| Script              | Description                                             |
|---------------------|---------------------------------------------------------|
| `npm run dev`       | Starts the local Vite development server with HMR       |
| `npm run build`     | Builds the optimized production bundle to `dist/`       |
| `npm run preview`   | Serves the production build locally for preview         |

---

## Customization

All portfolio content is managed from a **single data file** — making updates straightforward and clean.

### Updating Personal Information

Edit the file `src/data/resumeData.js`:

```js
export const resumeData = Object.freeze({
  personalInfo: {
    name: "Your Name",
    role: "Your Role",
    location: "Your Location",
    email: "your.email@example.com",
    phone: "Your Phone",
    github: "github.com/your-username",
    summary: "Your professional summary..."
  },
  experience: [ /* ... */ ],
  skills: { /* ... */ },
  education: [ /* ... */ ]
});
```

### Updating the Profile Photo

Replace the image at `pic/zoro.jpg` with your own photo. Ensure the filename matches the import in `src/components/Hero.jsx`:

```js
import profileImg from '../../pic/your-photo.jpg';
```

---

## Build Optimization

Vite is configured with **manual chunk splitting** for optimal load performance:

- `vendor-react` — React & ReactDOM
- `vendor-motion` — Framer Motion
- `vendor-icons` — Lucide React

Section components (`Experience`, `Skills`, `Education`) are **lazy-loaded** via `React.lazy` and `Suspense`, reducing the initial bundle size significantly.

---

## Contact

**Sushil Ramtel**
- Email: [sushilramtel113@gmail.com](mailto:sushilramtel113@gmail.com)
- GitHub: [github.com/Sushil113](https://github.com/Sushil113)
- Portfolio: [sushil.com](https://sushil.com)

---

<p align="center">Designed & Built using React, Tailwind CSS & Framer Motion</p>
