import Link from 'next/link'
import Image from 'next/image'
import ContentPage from '@/components/ContentPage'
import { pageMetadata, site } from '@/lib/site'

export const metadata = pageMetadata('Concrete Manufacturing in Hosanagar, Shivamogga', 'Contact the Sharavathi Construction Products factory in Hosanagar for RCC pipes, precast concrete, specification checks and production scheduling enquiries.', '/factory/')
export default function FactoryPage() {
    return <ContentPage eyebrow="Sharavathi Construction Products" title="Concrete manufacturing in Hosanagar" intro="Our manufacturing facility is in Hosanagar, Shivamogga district, Karnataka. Contact our team to discuss RCC pipes, pavers, precast compound walls and custom concrete requirements.">
        <section id="our-story">
            <p className="eyebrow">Our name &amp; local roots</p>
            <h2 className="section-title">The Sharavathi River and Hosanagar</h2>
            <div className="space-y-5">
                <p className="body-copy">Our company is named after the Sharavathi River, whose basin includes Hosanagar, Sagara and Thirthahalli. Rising at Ambutirtha in Thirthahalli taluk, the river forms Jog Falls before reaching the Arabian Sea near Honnavar. It is the river of the region where we live and manufacture.</p>
                <p className="body-copy">Our founder, Mahabala Rao, built Kallu Halla Bridge across a tributary on the approach to Hosanagar. A major civil project for the area, it remains in use today. His experience of building here, along with his knowledge of local materials, suppliers and construction practices, continues to guide Sharavathi Construction Products.</p>
                <a className="text-link" href="https://maps.app.goo.gl/imdbFqQMGTJjicGN7" target="_blank" rel="noopener noreferrer">Kallu Halla Bridge · View on Google Maps ↗</a>
            </div>
        </section>
        <div className="factory-photo-grid"><figure><Image src="/images/sharavathi-pipe-yard.webp" alt="RCC pipes arranged in rows at Sharavathi’s Hosanagar factory" width={1800} height={1350} sizes="(max-width: 760px) 100vw, 50vw" /><figcaption>RCC pipe yard · Hosanagar</figcaption></figure><figure><Image src="/images/sharavathi-factory-entrance.webp" alt="Entrance and Sharavathi Construction Products sign at the Hosanagar factory" width={1400} height={1050} sizes="(max-width: 760px) 100vw, 50vw" /><figcaption>Our factory entrance</figcaption></figure></div>
        <div className="grid md:grid-cols-2 gap-10"><section><h2 className="section-title">Plan a factory visit</h2><p className="body-copy">Call ahead to arrange a visit and discuss the products relevant to your project.</p><p className="mt-5 font-semibold">{site.location}</p><div className="flex flex-wrap gap-6 mt-6"><a className="underline underline-offset-4" href={site.map} target="_blank" rel="noopener noreferrer">Open factory location ↗</a><a className="underline underline-offset-4" href={`tel:${site.telephone}`}>{site.phone}</a></div></section>
        <section><h2 className="section-title">Specifications &amp; quality enquiries</h2><p className="body-copy">Share your project’s required standard, pipe class, dimensions and inspection requirements. Ask the team to confirm the applicable product specification and available testing documentation before placing an order.</p></section></div>
        <section className="bg-neutral-100 p-8"><h2 className="section-title">Production &amp; dispatch planning</h2><p className="body-copy">Availability depends on the product, dimensions, order quantity and required date. For a bulk or phased order, send your delivery schedule so the team can confirm production timing and dispatch arrangements.</p><Link className="inline-block mt-6 underline underline-offset-4 font-semibold" href="/contact/#quote">Send an order enquiry →</Link></section>
        <section id="leadership" className="leadership-section"><p className="eyebrow">The people behind Sharavathi</p><h2 className="section-title">Our managing partners</h2><div className="partners-grid">{['Mr. Mahabala Rao', 'Ms. Anitha Rao', 'Mr. Suresh Swamyrao', 'Mr. Rasal Raju'].map((name, i) => <div key={name}><h3>{name}</h3><p>{i === 0 ? 'Founder & managing partner' : 'Managing partner'}</p></div>)}</div></section>
    </ContentPage>
}
