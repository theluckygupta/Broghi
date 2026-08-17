// API route to forward contact submissions to Sanity

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { name, email, message } = req.body
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' })

  const projectId = process.env.SANITY_PROJECT_ID
  const dataset = process.env.SANITY_DATASET || 'production'
  const token = process.env.SANITY_WRITE_TOKEN

  if (!projectId || !token) {
    return res.status(500).json({ error: 'SANITY_PROJECT_ID and SANITY_WRITE_TOKEN not configured' })
  }

  const payload = {
    mutations: [
      {
        create: {
          _type: 'contact',
          name,
          email,
          message,
          receivedAt: new Date().toISOString(),
        }
      }
    ]
  }

  try {
    const r = await fetch(`https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/${dataset}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })

    if (!r.ok) {
      const text = await r.text()
      console.error('Sanity error', text)
      return res.status(500).json({ error: 'Sanity error', details: text })
    }

    const data = await r.json()
    return res.status(200).json({ ok: true, result: data })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Request failed' })
  }
}
