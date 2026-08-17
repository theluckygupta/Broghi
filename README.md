# Broghi — Fabric Business Landing Page

This repository contains a Next.js + Tailwind CSS landing page scaffold for Broghi Tex Fab with a Sanity-ready contact endpoint.

What I added
- Minimal Next.js app with Tailwind
- Landing page with Introduction, Products, About, and Contact sections
- API endpoint at /api/contact that forwards submissions to Sanity (requires SANITY_WRITE_TOKEN in env)
- Sanity schema stubs for Contact submissions
- .env.example with environment variables you must set

Quick start (local)
1. Install dependencies

```bash
npm install
```

2. Copy env values

```bash
cp .env.example .env.local
# Fill SANITY_PROJECT_ID, SANITY_DATASET, SANITY_WRITE_TOKEN
```

3. Run development server

```bash
npm run dev
```

Sanity setup
1. I will create a Sanity project and invite your email as requested; after you accept, add the SANITY_WRITE_TOKEN into GitHub Actions / Vercel environment variables and into .env.local for local testing.
2. The API endpoint uses Sanity's Mutations API to create Contact documents. See sanity/ for schema stubs.

Deploying to Vercel
- Link this GitHub repo to Vercel and set the environment variables from the Sanity project (SANITY_PROJECT_ID, SANITY_DATASET, SANITY_WRITE_TOKEN, NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET).
- Build command: `npm run build`; Output directory: `.next` (default for Next.js)

Replace logo
- Replace public/logo.png with your provided Image.png assets. I used a placeholder — commit the real logo to public/logo.png.

What's next
- I will create a feature branch and open a PR (next step) with the full site and Sanity Studio wiring.
- After you accept Sanity invite, I'll finalize studio deployment and seed any sample content.
