// Sanity studio config (minimal)
const projectId = process.env.SANITY_PROJECT_ID || ''
const dataset = process.env.SANITY_DATASET || 'production'

module.exports = {
  projectId,
  dataset,
  title: 'Broghi Studio',
  plugins: [
    // Add studio plugins here (deskTool, vision, etc.) after installing
  ],
  schema: {
    // The schema files live in ../schemas/
    types: []
  }
}
