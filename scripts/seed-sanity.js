#!/usr/bin/env node
// scripts/seed-sanity.js
// Usage: SANITY_PROJECT_ID=yourid SANITY_DATASET=production SANITY_WRITE_TOKEN=token node scripts/seed-sanity.js

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET || 'production'
const token = process.env.SANITY_WRITE_TOKEN

if (!projectId || !token) {
  console.error('Missing SANITY_PROJECT_ID or SANITY_WRITE_TOKEN environment variables.')
  process.exit(1)
}

const endpoint = `https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/${dataset}`

const payload = {
  mutations: [
    {
      create: {
        _type: 'product',
        title: 'Sample Fabric — Cotton Blend',
        slug: { _type: 'slug', current: 'sample-fabric-cotton-blend' },
        description: 'A high-quality cotton blend suitable for a wide range of apparel and home textile applications.',
        price: 0,
        images: [],
      }
    },
    {
      create: {
        _type: 'contact',
        name: 'Example Lead',
        email: 'lead@example.com',
        message: 'This is a seeded contact created for testing purposes. Replace or remove it in the Studio.',
        receivedAt: new Date().toISOString(),
      }
    }
  ]
}

async function seed() {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })

    const text = await res.text()
    if (!res.ok) {
      console.error('Sanity returned error', res.status, text)
      process.exit(1)
    }

    console.log('Seed successful:')
    console.log(text)
  } catch (err) {
    console.error('Request failed', err)
    process.exit(1)
  }
}

seed()
