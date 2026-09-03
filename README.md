# Harshith E Sevai Maiyam Website

A modern, fast, and static website built for **Harshith E Sevai Maiyam**, a Central Govt-authorized Common Service Center in Villivakkam, Chennai.

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (for icons)

## How to Update Content
All business data, services, and hours are centrally managed in a single file. You do not need to hunt through the code to update text.

1. Open `data/site-content.ts`.
2. Edit the corresponding fields (e.g., `business.phonePrimary` or the `services` arrays).
3. Save the file. The site will automatically reflect the changes when you build it.

### Currently Pending Info
There are a few placeholders you should fill in inside `data/site-content.ts`:
- **Opening Time**: `business.hours.display` currently has a `[TODO]` for the opening time.
- **Email / Owner Name**: Add these if desired.

## Running Locally

To run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building and Deployment

This project is configured for a **Fully Static Export**.

1. Run the build command:
```bash
npm run build
```
2. Next.js will generate an `out/` folder containing the static HTML/CSS/JS files.
3. You can deploy this `out/` folder to any static hosting provider such as:
   - Vercel (recommended, just link the GitHub repo)
   - Netlify
   - Cloudflare Pages
   - Any standard cPanel / FTP web hosting (just upload the contents of the `out` folder)

## Project Structure
- `app/` - Next.js routing (only `page.tsx` exists as this is a single-page site) and layout.
- `components/` - React components for each section of the page (Hero, ServicesGrid, etc.)
- `data/` - Contains `site-content.ts` for all textual content.
- `public/` - Static assets (images, icons).
