# svg2jsx 🍃

> Transform SVG to valid JSX

A web tool that converts SVG markup into JSX-compatible code for React applications.

## Features

- **SVG to JSX Conversion**: Automatically transforms SVG attributes to JSX format
  - `class` → `className`
  - `style` strings → JavaScript objects
  - Kebab-case → camelCase attributes
- **SVG Optimization**: Built-in SVGO integration for cleaner output
- **Live Preview**: Interactive editor with real-time conversion
- **File Upload**: Drag-and-drop SVG files

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to use the tool.

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm test         # Run tests
npm run lint     # Lint code
npm run format   # Format code
```

## Requirements

- Node.js >= 18.20.0

## Tech Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Biome (linting & formatting)
