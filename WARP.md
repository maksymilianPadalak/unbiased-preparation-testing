# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Unbiased is a Next.js 15 project using the App Router architecture, built with TypeScript, React 19, and Tailwind CSS 4. The project includes AI SDK integration for OpenAI and uses Turbopack for faster development builds. The app features a brutalist, minimalistic design inspired by Berlin architecture, focusing on unbiased decision-making.

## Common Development Commands

### Development Server
```bash
pnpm dev        # Start development server with Turbopack
npm run dev     # Alternative with npm
```
The development server runs on http://localhost:3000 with hot reload enabled.

### Build and Production
```bash
pnpm build      # Build for production with Turbopack
pnpm start      # Start production server
```

### Code Quality
```bash
pnpm lint       # Run ESLint
pnpm prettier . --write  # Format code with Prettier
```

## Architecture Overview

### App Router Structure
- **`src/app/`** - Next.js App Router directory containing:
  - `layout.tsx` - Root layout with Geist font configuration and global styles
  - `page.tsx` - Home page component (currently minimal)
  - `globals.css` - Global styles with Tailwind CSS and CSS custom properties

### Key Technologies
- **Next.js 15** with App Router and Turbopack
- **React 19** for UI components
- **TypeScript** with strict configuration
- **Tailwind CSS 4** with PostCSS integration
- **AI SDK** (`@ai-sdk/openai`) for AI integrations
- **ESLint** with Next.js recommended rules
- **Prettier** for code formatting

### Configuration Files
- `next.config.ts` - Next.js configuration (currently minimal)
- `tsconfig.json` - TypeScript configuration with path mapping (`@/*` → `./src/*`)
- `eslint.config.mjs` - ESLint flat config with Next.js rules
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS
- `package.json` - Package manager configuration using pnpm

### Font and Styling System
- **Geist Sans & Mono** fonts loaded via `next/font/google`
- **CSS Custom Properties** for theming (light/dark mode support)
- **Tailwind CSS** with custom theme configuration in `globals.css`

## Development Notes

- Uses **pnpm** as the primary package manager (evidenced by `pnpm-lock.yaml`)
- **Turbopack** is enabled for both development and build processes for improved performance
- **Path aliases** configured: `@/*` maps to `./src/*`
- **Dark/light mode** theming setup via CSS custom properties
- Features a brutalist design with bold typography and minimal UI elements
