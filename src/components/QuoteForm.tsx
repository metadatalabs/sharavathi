'use client'

import { useState, type FormEvent } from 'react'
import { site } from '@/lib/site'

export default function QuoteForm() {
    const [product, setProduct] = useState('RCC pipes')
    const [draft, setDraft] = useState('')
    function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const lines = ['Hello Sharavathi Construction Products, I would like a quotation.']
        const fields = ['Name', 'Product', ...(product === 'RCC pipes' ? ['Diameter', 'Class'] : []), 'Quantity', 'Destination', 'Required date', 'Notes']
        for (const field of fields) {
            const value = String(data.get(field) || '').trim()
            if (value) lines.push(`${field}: ${value}`)
        }
        setDraft(lines.join('\n'))
    }
    return <section id="quote" className="quote-form-section">
        <div className="quote-form-panel">
            <p className="eyebrow">Project enquiry</p>
            <h2 className="section-title">Request a quote</h2>
            <p className="text-neutral-600 max-w-2xl mb-8">Fill in your project details to prepare a WhatsApp enquiry. You can review the message before sending.</p>
            <form onSubmit={prepareEnquiry} onChange={() => setDraft('')} className="grid sm:grid-cols-2 gap-6">
                <label className="form-label">Your name<input name="Name" autoComplete="name" required maxLength={100} /></label>
                <label className="form-label">Product<select name="Product" value={product} onChange={e => setProduct(e.target.value)}><option>RCC pipes</option><option>Interlocking pavers</option><option>Compound walls</option><option>Custom precast</option></select></label>
                {product === 'RCC pipes' && <>
                    <label className="form-label">Diameter<select name="Diameter" required><option value="">Select diameter</option>{[150, 300, 450, 600, 900, 1200].map(size => <option key={size}>{size} mm</option>)}<option>Other / confirm with sales</option></select></label>
                    <label className="form-label">Pipe class<select name="Class" required><option value="">Select class</option><option>NP3</option><option>NP4</option><option>Confirm from project specification</option></select></label>
                </>}
                <label className="form-label">Quantity and units<input name="Quantity" placeholder="e.g. 40 pipes or 200 m² of pavers" required maxLength={120} /></label>
                <label className="form-label">Delivery town / site<input name="Destination" autoComplete="address-level2" placeholder="Town, district and site location" required maxLength={200} /></label>
                <label className="form-label">Required date (optional)<input name="Required date" type="date" /></label>
                <label className="form-label sm:col-span-2">Specifications or notes (optional)<textarea name="Notes" rows={3} maxLength={1500} placeholder="Pipe length, joint type, drawings, access requirements…" /></label>
                <div className="sm:col-span-2"><button type="submit" className="button-primary">Prepare WhatsApp enquiry →</button></div>
            </form>
            <div aria-live="polite">{draft && <div className="mt-8 border border-neutral-300 bg-white p-6">
                <h3 className="font-bold mb-3">Your enquiry is ready</h3>
                <p className="whitespace-pre-wrap break-words text-sm text-neutral-700 mb-6">{draft}</p>
                <a href={`${site.whatsapp}?text=${encodeURIComponent(draft)}`} target="_blank" rel="noopener noreferrer" className="button-primary">Continue to WhatsApp →</a>
                <p className="text-sm text-neutral-600 mt-4">Nothing has been sent yet. You can edit the message in WhatsApp before sending.</p>
            </div>}</div>
            <p className="text-sm text-neutral-600 mt-6">Prefer to call? <a className="underline" href={`tel:${site.telephone}`}>{site.phone}</a></p>
        </div>
    </section>
}
