# Sanity setup and seeding instructions

Follow these steps to create a Sanity project, invite your account, create a write token, and seed sample content.

1) Install Sanity CLI (locally):

   npm install -g @sanity/cli

2) Create a new Sanity project (or let me create it for you):

   # interactive: pick a project name (e.g., broghi-studio), dataset name (production)
   sanity init --create-project "Broghi Studio"

   # or create a new project non-interactively
   # sanity init

3) After project creation, note the project ID and dataset name. In the Sanity web studio, invite the email address you want to give access to (theluckygupta@yahoo.com) under Project > Settings > Members.

4) Create a long-lived write token (server-side only):

   - Go to Manage > API in the Sanity project dashboard
   - Create a token with the "Write" permission (or document creation scope) and copy it. Keep this secret.

5) Add the following environment variables in your Codespace or Vercel project (server-side values kept secret in Vercel):

   SANITY_PROJECT_ID=your_project_id_here
   SANITY_DATASET=production
   SANITY_WRITE_TOKEN=your_long_lived_token_here
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production

6) Run the seed script included in the repo to create a sample product and contact document (from the repo root):

   npm run seed:sanity

   (This runs `node scripts/seed-sanity.js` which POSTs a mutate request to the Sanity API.)

7) Start the Studio locally (optional):

   cd sanity/studio
   npm install
   SANITY_PROJECT_ID=your_project_id SANITY_DATASET=production sanity start

8) Preview the Next.js site in Codespaces (contact form will send to Sanity once tokens are set):

   # from repo root
   npm install
   HOST=0.0.0.0 npm run dev

Troubleshooting
- If the seed script fails with a 401/403, check that the token has write permissions and is associated with the correct project/dataset.
- If the Studio shows no schemas, ensure you copy the contents of `sanity/schemas` into the Studio project's `schemas/` folder, or run `sanity init` in `sanity/studio` and replace its schemas.
