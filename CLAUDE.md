# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Lachezar 'cilium' Kochev, a video editor showcasing various types of content including short-form edits, long-form videos, gaming shorts, thumbnails, cinematics, and ads. The site is built with React, Vite, and deployed via GitHub Pages.

## Development Commands

- **Development server**: `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Preview**: `npm run preview`
- **Deploy**: `npm run deploy` (builds and deploys to gh-pages branch)

## Architecture

### Tech Stack
- **Frontend**: React 19 with Vite
- **Styling**: TailwindCSS with custom gradient themes
- **Animation**: Framer Motion for reveal animations and transitions
- **Navigation**: React Router DOM for routing, react-scroll for smooth scrolling
- **Icons**: Heroicons
- **Deployment**: GitHub Pages via gh-pages branch

### Key Components

**App.jsx** (src/App.jsx:1-17)
- Main router component with routes for Portfolio (/) and About (/about)

**Portfolio.jsx** (src/Portfolio.jsx:1-505)
- Main portfolio page with sections for different video categories
- Uses react-scroll for smooth navigation between sections
- Implements video modal for YouTube embeds
- Data arrays for different content types (shortform, longform, ads, cinematics, thumbnails, etc.)

**About.jsx** (src/About.jsx)
- About page component

### Project Structure
```
src/
├── App.jsx          # Main router
├── Portfolio.jsx    # Main portfolio page
├── About.jsx        # About page
├── main.jsx         # React entry point
├── index.css        # Global styles
└── old/             # Legacy files
```

### Media Organization
- **Images**: `/public/images/` (collage images clm1.jpg, clm2.jpeg, clm3.jpg, clm4.jpg)
- **Thumbnails**: `/public/thumbnails/` (portfolio thumbnails)
- **Videos**: Embedded YouTube videos using ytId references

## Deployment Process

The site uses GitHub Pages with the gh-pages branch:
1. Make changes on main branch
2. Run `npm run deploy` to build and push to gh-pages
3. GitHub Pages automatically deploys from gh-pages branch
4. Live site: https://cilium4o.github.io/

## Content Management

Video content is managed through data arrays in Portfolio.jsx:
- `shortform`: Short-form video edits
- `longform`: Long-form video content  
- `gamingShorts`: Gaming-related short videos
- `trendyBrainrot`: Trendy/viral content
- `ads`: Advertisement and informational videos
- `cinematics`: Cinematic video content
- `thumbnails`: Static thumbnail designs

Each video entry requires:
- `title`: Display name
- `url`: Full YouTube URL
- `ytId`: YouTube video ID for embedding

## Styling Conventions

- Uses TailwindCSS with custom gradient themes
- Responsive design with mobile-first approach
- Framer Motion for animations and transitions
- Dark mode support built into components
- Custom purple/indigo gradient color scheme