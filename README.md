# Lazord Dental — Futuristic Digital Dental Lab

A premium, high-performance web application for Lazord Dental Lab, featuring immersive 3D visualizations, smooth cinematic transitions, and a modern medical aesthetic.

## 🚀 Features

- **Immersive 3D Scene**: Interactive dental implant model using Three.js and React Three Fiber.
- **Cinematic Motion**: Smooth scroll-based reveals powered by GSAP and Lenis.
- **Responsive Design**: Fully optimized for all devices with a mobile-first approach.
- **SEO Optimized**: Complete metadata, Open Graph tags, and accessibility features.
- **Performance Focused**: Code splitting, lazy image loading, and manual vendor chunks.

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **3D Engine**: Three.js / React Three Fiber / Drei
- **Animation**: GSAP 3 (GreenSock) + ScrollTrigger
- **Smooth Scroll**: Lenis
- **Styling**: Vanilla CSS (Custom Design System)

## 📦 Local Development

```bash
npm install
npm run dev
```

## 🏗️ Production Build

```bash
npm run build
```

Output goes to `dist/`. The build runs TypeScript type-checking (`tsc -b`) before bundling.

## 🚀 Deployment

Deployment is **fully automated via GitHub Actions**.

- Every push to the `main` branch triggers a build and deploys to GitHub Pages.
- The workflow uses `npm ci` for reproducible, deterministic installs.
- **Live URL**: https://AbdAlrheemFadda.github.io/lazord-Clinic-Task/
- **Base Path**: `/lazord-Clinic-Task/` (configured in `vite.config.ts`)

## 📁 Project Structure

```
src/
  assets/images/   ← All image assets (bundled by Vite)
  components/      ← 16 React components
  App.tsx          ← Root application, Lenis setup, GSAP ScrollTrigger
  main.tsx         ← Entry point
  index.css        ← Global design system (CSS variables, utilities)
public/
  .nojekyll        ← Required for GitHub Pages with SPA
  404.html         ← SPA redirect for direct URL navigation
  og-image.png     ← Social sharing preview image
  robots.txt       ← Search engine crawl rules
```

## ⚠️ Known Remaining Tasks

1. **Image Optimization** (HIGH): All images in `src/assets/images/` are raw PNGs averaging 1–2 MB each. Convert to WebP targeting <200 KB per image using a tool like `squoosh` or `vite-plugin-imagemin`.
2. **Contact Form Backend** (HIGH): The contact form currently shows a browser alert on submit. Integrate Formspree or EmailJS for real email delivery.
3. **Tests** (MEDIUM): No unit or E2E tests exist. Add Vitest + React Testing Library and/or Playwright.

## 🌐 SEO & Social

- **Robots.txt**: `public/robots.txt` — points to GitHub Pages URL
- **Open Graph**: Absolute URLs configured in `index.html`
- **Favicon**: Uses `og-image.png` via `<link rel="icon">`
