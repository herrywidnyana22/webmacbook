# MacBook Pro Showcase

A modern, interactive website showcasing MacBook Pro's powerful performance with cutting-edge web technologies.

## Overview

This project is a beautifully designed marketing website featuring the MacBook Pro, built with React, TypeScript, and Vite. It includes smooth scroll animations, 3D model interactions, and responsive design optimized for all devices.

## Features

- **Interactive Hero Section**: Eye-catching landing with smooth animations
- **3D Product View**: Three.js powered 3D MacBook models with interactive switching
- **Performance Showcase**: Scroll-triggered animations for product performance highlights
- **Features Showcase**: AI features presentation with engaging animations
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Smooth Animations**: GSAP animations with scroll triggers for engaging user experience
- **Modern Stack**: React 19, TypeScript, Tailwind CSS, and Vite

## Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animation**: GSAP with React integration
- **State Management**: Zustand
- **Responsive**: React Responsive

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx              # Landing hero section
│   ├── Navbar.tsx            # Navigation bar
│   ├── ProductView.tsx       # 3D product showcase
│   ├── Showcase.tsx          # Feature showcase
│   ├── Performance.tsx       # Performance animations
│   ├── Features.tsx          # AI features section
│   ├── Highlight.tsx         # Product highlights
│   ├── Footer.tsx            # Footer section
│   └── models/
│       ├── Macbook.tsx
│       ├── Macbook14.tsx
│       ├── Macbook16.tsx
│       └── threeJS/
│           ├── Lightning.tsx
│           └── ModelSwitcher.tsx
├── lib/
│   └── constants/
│       └── index.ts          # App constants and positions
├── store/
│   └── index.ts              # Zustand state management
├── types/
│   └── index.d.ts            # TypeScript definitions
├── assets/                   # Static assets
├── App.tsx                   # Main app component
├── main.tsx                  # Entry point
└── index.css                 # Global styles
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- Bun or npm/yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
bun install
# or
npm install
```

### Development

```bash
# Start the development server
bun dev
# or
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
# Build for production
bun run build
# or
npm run build

# Preview production build
bun run preview
# or
npm run preview
```

## Key Components

### Hero Component
Large, immersive landing section with headline animations and call-to-action buttons.

### ProductView Component
Interactive 3D model viewer using Three.js with the ability to switch between different MacBook models.

### Performance Component
Scroll-triggered animations showcasing MacBook performance with parallax image effects on desktop and simplified animations on mobile.

### Features Component
Highlights AI features with animated icons and descriptions.

## Animations & Effects

The project uses GSAP for smooth animations:
- **Scroll Triggers**: Elements animate as they come into view
- **Timeline Animations**: Complex sequences of animations tied to scroll position
- **Scrubbed Timelines**: Animations synced directly to scroll progress
- **Responsive Animations**: Different animations for mobile vs desktop

## Performance

- Optimized 3D rendering with Three.js
- Lazy loading of images and models
- Responsive image sizing
- Efficient GSAP animations with proper cleanup
- CSS-in-JS with Tailwind for minimal bundle size

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or feedback, please reach out to the project maintainers.
