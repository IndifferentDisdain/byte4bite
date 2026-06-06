# Byte4Bite

A recipe site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed to Azure Static Web Apps.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Project structure

```
src/
  components/     # Shared UI components (Header, Footer, RecipeCard)
  content/
    recipes/      # Recipe markdown files
  layouts/        # Base and recipe page layouts
  pages/          # File-based routing
    recipes/      # /recipes index and [slug] pages
  styles/
    global.css
public/           # Static assets
```

## Adding a recipe

Create a markdown file in `src/content/recipes/` with the required frontmatter (see `src/content/config.ts` for the schema).

## Build & deploy

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build locally
```

The site is configured for Azure Static Web Apps (`staticwebapp.config.json`). Push to the main branch to trigger a deploy.
