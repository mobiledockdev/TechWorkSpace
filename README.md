# TechWorkSpace Website

A clean, responsive marketing website for the TechWorkSpace mobile app. Built with React + Vite and optimized for GitHub Pages deployment.

## Features

- **Home Page**: Hero section, features overview, how it works, and key benefits
- **Privacy Policy**: Comprehensive privacy policy page (Apple App Store friendly)
- **Support Page**: Contact information and FAQ section
- **Responsive Design**: Mobile-first, works on all devices
- **Fast Loading**: Optimized static site with minimal dependencies

## Tech Stack

- React 18
- Vite 5
- React Router (HashRouter for GitHub Pages compatibility)
- Plain CSS (no frameworks)

## Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)

### Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
```

### Running Locally

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

Build the static site:

```bash
npm run build
```

The built files will be in the `dist` directory.

Preview the production build:

```bash
npm run preview
```

## Deploying to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. Create a `.github/workflows/deploy.yml` file (see below)
2. Push to your repository
3. Go to Settings > Pages and select "GitHub Actions" as the source

### Option 2: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. If your repository is named `TechWorkSpace`, the base path is already configured in `vite.config.js`. If your repository has a different name, update the `base` property in `vite.config.js`:
   ```js
   base: '/YourRepoName/',
   ```

3. Copy the contents of the `dist` folder to the `gh-pages` branch or use a tool like `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
   
   Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
   
   Then run:
   ```bash
   npm run deploy
   ```

4. Enable GitHub Pages in your repository settings (Settings > Pages) and select the `gh-pages` branch or the `dist` folder.

### Important Notes

- The site uses HashRouter (`#/` routing) for GitHub Pages compatibility
- Update the `base` path in `vite.config.js` if your repository name differs from `TechWorkSpace`
- The site will be available at `https://yourusername.github.io/TechWorkSpace/`

## Project Structure

```
.
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Nav.jsx
    │   └── Footer.jsx
    └── pages/
        ├── Home.jsx
        ├── Privacy.jsx
        └── Support.jsx
```

## Customization

### Updating Content

- **Home Page**: Edit `src/pages/Home.jsx`
- **Privacy Policy**: Edit `src/pages/Privacy.jsx` (update the `[DATE]` placeholder)
- **Support Page**: Edit `src/pages/Support.jsx`
- **Styling**: Edit `src/index.css`

### Changing Colors

Update CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --primary-dark: #1e40af;
  /* ... */
}
```

## License

This project is private and proprietary.
