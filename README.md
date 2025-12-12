# CookRecipe 🍳

A modern, responsive recipe-sharing platform built with HTML5, CSS3, TypeScript, and Vite.
Designed from an original Figma draft, CookRecipe delivers a delightful browsing and cooking experience with clean UI and smooth interactions.

## ✨ Features

- **Recipe Discovery**: Browse through a curated collection of healthy and delicious recipes
- **Detailed Recipe Pages**: Step-by-step cooking instructions with nutritional information
- **Recipe Search**: Show all recipes and filter recipes by title and food style
- **Contact Form**: Get in touch with recipe suggestions or feedback
- **Modern UI/UX**: Clean, intuitive interface with smooth animations
- **Responsive Design**: Optimized for mobile, tablet, and desktop with vw units
- **Optimized CSS**: Consolidated @media queries and responsive unit system

## 🚀 Live Demo

[View Live Site](https://cook-recipes-rosy.vercel.app/) 

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, TypeScript
- **Build Tool**: Vite
- **Styling**: Flexbox, CSS Grid, responsive vw units
- **Data**: 17 static recipe entries (per-page TypeScript files)

## 📁 Project Structure

```
CookRecipe/
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── header.ts/.css       # Navigation header with styles
│   │   ├── footer.ts/.css       # Site footer with styles
│   │   ├── card1.ts/.css        # Recipe card component
│   │   ├── card2.ts/.css        # Featured recipe card
│   │   ├── card3.ts/.css        # List view recipe card
│   │   ├── slideCard.ts/.css    # Hero banner component
│   │   ├── subscribe.ts/.css    # Newsletter subscription
│   │   ├── contactCard.ts/.css  # Contact form
│   │   ├── adCard.ts/.css       # Advertisement component
│   │   └── detailCard.ts/.css   # Recipe detail component
│   ├── images/                  # Component-specific images
│   ├── main.ts                  # Home page entry point
│   ├── recipes.ts               # Recipes listing page
│   ├── detail.ts                # Recipe detail page
│   ├── contact.ts               # Contact page
│   └── global.css               # Global styles and base layout
├── public/                      # Public assets: images
├── dist/                        # Build output directory
├── index.html                   # Home page
├── recipes.html                 # Recipes listing page
├── detail.html                  # Recipe detail page
├── contact.html                 # Contact page
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
└── vite.config.ts               # Vite configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AlynGui/CookRecipes.git
   cd CookRecipes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## 🎨 Features Overview

### 🏠 Home Page
- Hero section with featured recipe
- Recipe categories and filters
- Popular recipes showcase
- Newsletter subscription

### 📋 Recipe Listing
- Search and filter functionality
- Recipe cards with quick info
- Pagination

### 📖 Recipe Details
- Complete cooking instructions
- Ingredient lists with quantities
- Nutritional information
- Cooking time and difficulty
- Author information

### 📞 Contact Page
- Contact form for feedback
- Recipe submission
- Support inquiries

## 🎯 CSS Architecture & Optimization

### Responsive Design System
- **Mobile-first approach** with breakpoints at 767px and 1024px
- **vw unit system** for consistent scaling across devices
  - Mobile base: 375px = 100vw
  - Tablet base: 768px = 100vw
- **Consolidated @media queries** positioned at the end of each CSS file
- **Optimized CSS structure** for better performance and maintainability

### Component-Based Styling
Each component has its own CSS file with:
- Base styles for desktop/default view
- Mobile responsive styles (max-width: 767px)
- Tablet responsive styles (768px-1024px)
- Consistent spacing and typography using vw units

## 🎯 Recipes Data Structure
Each recipe includes:
- Unique ID
- title
- High-quality images
- Introduction
- Preparation time
- Food style tags (Healthy, Vegan, etc.)
- Author and publication date
- Complete ingredient list
- Step-by-step instructions
- Nutritional information

## 🌟 Key Components

### Recipe Cards
- **Card1**: Standard recipe card with image, title, and quick info
- **Card2**: Featured recipe card with enhanced styling
- **Card3**: Compact list view with author information


### Navigation
- Responsive header with logo and navigation menu
- Footer with social links and copyright

## 🔧 Configuration

### TypeScript Configuration
- Target: ES2022
- Strict mode enabled
- Module resolution: bundler
- DOM type definitions included

### Vite Configuration
- Hot Module Replacement (HMR)
- TypeScript support out of the box
- Asset optimization and bundling
- Development server with fast refresh
- Build optimization for production

### CSS Optimization Features
- **px to vw unit conversion** for responsive design
- **Mobile-first responsive breakpoints**:
  - Mobile: max-width 767px
  - Tablet: 768px to 1024px
  - Desktop: 1025px and above
- **Consistent spacing system** across all components
