# Broghi — Fabric Business Landing Page

This repository contains a Next.js + Tailwind CSS landing page scaffold for Broghi Tex Fab with Sanity-ready contact endpoint.

What I changed in the feature/nextjs-sanity branch
- Applied theme colors and fonts auto-picked from your provided logo (approximate palette from Image.png).
  - Primary: #00A6E6
  - Accent: #66C7F0
  - Neutral grays set in Tailwind config
- Added Google Fonts: Poppins (headings) and Inter (body) and configured Tailwind's fontFamily.
- Updated styles/globals.css to import fonts and set CSS variables for the palette.

Logo replacement
- I did not yet add the binary logo file to the repo because images uploaded in chat can't automatically be written to the repository by the agent.
- Please add your Image.png to `public/logo.png` in the branch `feature/nextjs-sanity` (you can upload it directly via the GitHub web UI or commit it from Codespaces). The UI already references `/logo.png` so swapping the file will update the site immediately.

How to preview locally (Codespaces)
1. Checkout the branch:
   git fetch origin
   git checkout feature/nextjs-sanity
2. Install deps and run dev server (bind to 0.0.0.0 in Codespaces):
   npm install
   HOST=0.0.0.0 npm run dev
3. Forward port 3000 in Codespaces and open the preview.

Sanity and contact form
- The contact form posts to `/api/contact` and requires SANITY_PROJECT_ID and SANITY_WRITE_TOKEN to be set for the dataset to accept documents.
- I can continue with the Sanity project creation and seeding once you accept (I will not store tokens in this chat). If you want me to proceed creating the Sanity project and sending the invite to theluckygupta@yahoo.com, reply “Proceed Sanity” and I’ll continue.

Next steps I can take now
- If you upload `public/logo.png` here or allow me to fetch the uploaded image, I will commit it and push it to the branch.
- I can also open a pull request from `feature/nextjs-sanity` into `main` with a preview URL if you want — say “Open PR”.

