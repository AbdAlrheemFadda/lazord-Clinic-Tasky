# Lazord Dental - Futuristic Dental Lab

A premium, high-performance web application for Lazord Dental Lab, featuring immersive 3D visualizations, smooth cinematic transitions, and a modern medical aesthetic.

## 🚀 Features

- **Immersive 3D Scene**: Interactive 3D dental components using Three.js and React Three Fiber.
- **Cinematic Motion**: Smooth scroll-based reveals and transitions powered by GSAP and Lenis.
- **Responsive Design**: Fully optimized for all devices with a mobile-first approach.
- **SEO Optimized**: Complete metadata, Open Graph tags, and accessibility features.
- **Performance Focused**: Code splitting and optimized asset loading.

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **3D Engine**: Three.js / React Three Fiber
- **Animation**: GSAP (GreenSock)
- **Smooth Scroll**: Lenis
- **Styling**: Vanilla CSS (Custom Design System)

## 📦 Deployment

The project is configured for automatic deployment via **GitHub Actions**.

1. **Push to GitHub**: Every push to the `main` branch will trigger a build and deploy to GitHub Pages.
2. **Base Path**: The application is configured with the base path `/lazord-Clinic-Task/` to ensure all assets load correctly on GitHub Pages.
3. **Local Testing**:
   ```bash
   npm install
   npm run dev
   ```
4. **Manual Build**:
   ```bash
   npm run build
   ```
   The output in `dist/` is optimized for production hosting.

## 🌐 SEO & Social

- **Robots.txt**: Included in `public/`
- **Metadata**: Comprehensive meta tags in `index.html`
- **Base Path**: Configured as relative (`./`) for flexible hosting.
