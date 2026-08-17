Sanity Studio — local start instructions

1. Install the Sanity CLI globally if you don't have it:

   npm install -g @sanity/cli

2. Create a local studio folder (this repo includes `sanity/schemas` already). From the repo root run:

   cd sanity/studio
   npm install
   # Set SANITY_PROJECT_ID and SANITY_DATASET in the environment or in an .env file
   sanity start

3. Alternatively, you can run `sanity init` to create a new studio project and then copy the schemas from `../schemas/` into the studio `schemas` folder.

Notes
- After I create the Sanity project and invite your email, I'll provide the SANITY_PROJECT_ID; add that to `.env.local` or to your Codespace environment variables.
- The studio config here is a minimal placeholder to help you bootstrap quickly. You can run `sanity init` and then copy the provided schema stubs from `sanity/schemas/` into your studio's schema folder.
