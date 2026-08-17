# PR: feature/nextjs-sanity -> main

This PR contains:
- Sanity Studio wiring (schema stubs already in `sanity/schemas/`)
- Placeholder logo (replace `public/logo.png` with your provided Image.png)
- Contact form API that writes to Sanity

How to preview
- Clone the repo and switch to the branch:
  git fetch origin
  git checkout feature/nextjs-sanity
- Install dependencies in the root and start Next.js:
  npm install
  npm run dev

Sanity setup (high level)
1. I will create the Sanity project and invite the email you provided (theluckygupta@yahoo.com). After you accept, copy SANITY_PROJECT_ID and SANITY_WRITE_TOKEN into `.env.local` or Codespace environment variables.
2. Start the studio locally from `sanity/studio` or visit the hosted studio once we deploy it.

Next steps I will take after you accept:
- Seed a sample product and a sample contact in the Sanity dataset so the site preview shows real data.
- Provide the PR link and a Vercel preview URL (you can deploy the branch or I can provide deploy steps).
