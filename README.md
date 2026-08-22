# Sushil Ramtel -- Personal Portfolio

A modern, high-performance personal portfolio website built with **React**, **Tailwind CSS**, and **Framer Motion**. Designed to showcase professional experience, technical skills, and educational background with a clean and elegant user interface.

---

## Overview

This portfolio is a single-page application (SPA) featuring:

- **Smooth tab-based navigation** -- About, Experience, Skills, and Education sections
- **Animated transitions** powered by Framer Motion
- **Fully responsive design** -- optimized for mobile, tablet, and desktop
- **Optimized performance** -- code-split vendor chunks and lazy-loaded sections
- **Dark-themed aesthetic** with glassmorphism and gradient accents
- **Automated deployment** via GitHub Actions to GitHub Pages

---

## Tech Stack

| Category         | Technology                                      |
|------------------|-------------------------------------------------|
| **Framework**    | React 18                                        |
| **Build Tool**   | Vite 7                                          |
| **Styling**      | Tailwind CSS 3                                  |
| **Animations**   | Framer Motion 11                                |
| **Icons**        | Lucide React                                    |
| **PostCSS**      | Autoprefixer                                    |
| **Deployment**   | GitHub Pages (via GitHub Actions)               |

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
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow for deployment
├── index.html                # HTML entry point
├── vite.config.js            # Vite & build configuration
├── tailwind.config.js        # Tailwind theme customization
├── postcss.config.js         # PostCSS configuration
└── package.json              # Project dependencies & scripts
```

---

## Getting Started

### Prerequisites

- **Node.js** -- `v22.x` or higher ([Download](https://nodejs.org))
- **npm** -- `v10.x` or higher (bundled with Node.js)

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

## Deployment

The site is deployed to **GitHub Pages** using a **GitHub Actions** workflow. Every push to `main` triggers an automated build and deploy.

### How It Works

The workflow (`.github/workflows/deploy.yml`) does the following on each push to `main`:

1. Checks out the repository
2. Sets up Node.js 22
3. Installs dependencies (`npm install`)
4. Builds the production bundle (`npm run build`)
5. Uploads the `dist/` directory as a Pages artifact
6. Deploys to GitHub Pages

### Setting Up Deployment (First Time)

1. **Configure the Vite base path** -- `vite.config.js` already sets the base to `/personal-portfolio/` to match the GitHub repo name:

   ```js
   export default defineConfig({
     base: '/personal-portfolio/',
     // ...
   })
   ```

   If your repo name differs, update `base` to `/<your-repo-name>/`.

2. **Enable GitHub Pages in the repository settings**:
   - Go to **Settings** > **Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**

3. **Push to `main`** -- the workflow runs automatically and deploys the site.

4. **Access the live site** at:

   ```
   https://<your-github-username>.github.io/personal-portfolio/
   ```

### Redeploying

Every push to the `main` branch triggers a fresh build and deploy automatically. No manual steps required.

---

## Customization

All portfolio content is managed from a **single data file** -- making updates straightforward and clean.

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

- `vendor-react` -- React & ReactDOM
- `vendor-motion` -- Framer Motion
- `vendor-icons` -- Lucide React

Section components (`Experience`, `Skills`, `Education`) are **lazy-loaded** via `React.lazy` and `Suspense`, reducing the initial bundle size significantly.

---

## Contact

**Sushil Ramtel**
- Email: [sushilramtel113@gmail.com](mailto:sushilramtel113@gmail.com)
- GitHub: [github.com/Sushil113](https://github.com/Sushil113)
- Portfolio: [sushil113.github.io/personal-portfolio](https://sushil113.github.io/personal-portfolio/)

---

<p align="center">Designed & Built using React, Tailwind CSS & Framer Motion</p>
