import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  async function submit(e) {
    e.preventDefault()
    setStatus('loading')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } else {
      setStatus('error')
    }
  }

  return (
    <div>
      <Head>
        <title>Broghi Tex Fab — Fabrics</title>
        <meta name="description" content="Broghi Tex Fab — Quality fabrics" />
      </Head>

      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Broghi logo" width={120} height={60} />
          <h1 className="text-2xl font-semibold">Broghi Tex Fab</h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 space-y-16">
        <section id="intro" className="py-12">
          <h2 className="text-3xl font-bold">Introduction</h2>
          <p className="mt-4 text-lg">Welcome to Broghi Tex Fab — premium fabrics for your business. Replace this copy with your supplied content in the Sanity CMS.</p>
        </section>

        <section id="products" className="py-12">
          <h2 className="text-3xl font-bold">Products</h2>
          <p className="mt-4">Products gallery will be managed from the Sanity CMS. For now, this area contains placeholder cards.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="border rounded-md p-4 shadow-sm">
                <div className="h-40 bg-gray-100 flex items-center justify-center">Image</div>
                <h3 className="mt-3 font-semibold">Fabric {i}</h3>
                <p className="text-sm mt-1 text-gray-600">Short description</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="py-12">
          <h2 className="text-3xl font-bold">About</h2>
          <p className="mt-4">Company details, address and contact info. Replace with content from the CMS.</p>
        </section>

        <section id="contact" className="py-12">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-4">Send us a message and we'll save it to the CMS.</p>

          <form onSubmit={submit} className="mt-6 max-w-xl space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="mt-1 block w-full border rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="mt-1 block w-full border rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea required value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="mt-1 block w-full border rounded p-2 h-32" />
            </div>
            <div>
              <button type="submit" className="inline-flex items-center px-4 py-2 bg-sky-600 text-white rounded">Send</button>
              {status === 'loading' && <span className="ml-3">Sending…</span>}
              {status === 'success' && <span className="ml-3 text-green-600">Sent — thanks!</span>}
              {status === 'error' && <span className="ml-3 text-red-600">Error — try again</span>}
            </div>
          </form>
        </section>
      </main>

      <footer className="border-t mt-12 py-6 text-center text-sm text-gray-500">© Broghi Tex Fab</footer>
    </div>
  )
}
