# Purabi General Insurance Co. Ltd. (PGICL) Website

Official responsive web application for **Purabi General Insurance Company Limited (PGICL)**, established in 1988 in Bangladesh. Built strictly adhering to the corporate brand visual guidelines with pixel-perfect attention to detail, typography, color palette, responsive breakpoints, and seamless client interactions.

---

## 🚀 Live Routes

- **Home Page**: `/`
- **Health Insurance**: `/health-insurance`
- **About Us**: `/about-us`

---

## 🛠️ Technology Stack

- **React 19** with **Vite**
- **TypeScript**
- **Tailwind CSS v4**
- **React Router v7** (`react-router-dom`)
- **Lucide React** (Modern lightweight icons)
- **Poppins** Typography hierarchy (Google Fonts)

---

## 🎨 Global Design System

- **Primary Brand Color**: `#B6422A` (Burnt Orange / Deep Reddish Orange)
- **Backgrounds**: Soft Warm White (`#FFFFFF`, `#FAF7F5`, `#FDF6F4`)
- **Typography**: Poppins Sans-Serif (300, 400, 500, 600, 700, 800)
- **Component System**: Modular reusable components with interactive client-side validations, modal dialogs, and responsive layouts.

---

## 📦 Getting Started & Running Locally

### 1. Prerequisites
- Node.js (v18.0 or later)
- npm or yarn

### 2. Installation
```bash
git clone <repository-url>
cd purabi-insurance
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at [http://localhost:3000](http://localhost:3000) (or the port specified by Vite).

### 4. Build for Production
```bash
npm run build
```
The compiled, production-ready static assets will be output to the `dist/` directory.

---

## 🚢 Deployment Instructions

### Deploy to Vercel
1. Push your repository to **GitHub**.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Select your GitHub repository.
4. Framework Preset: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

For single-page app (SPA) routing on Vercel, a `vercel.json` rewrite configuration is provided:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Deploy to GitHub Pages or Netlify
Ensure your static hosting serves `index.html` for all route paths.

---

## 📄 License & Copyright

Copyright © 360D Soul Limited 2025. All rights reserved.  
Purabi General Insurance Co. Ltd. (PGICL).
