import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ContentPage from '@/components/ContentPage'
import { locations } from '@/lib/locations'
import { pageMetadata, site } from '@/lib/site'

export const dynamicParams = false
export function generateStaticParams() { return locations.map(({ slug }) => ({ slug })) }
async function getLocation(params: Promise<{ slug: string }>) {
    const { slug } = await params
    const location = locations.find(item => item.slug === slug)
    if (!location) notFound()
    return location
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const location = await getLocation(params)
    return pageMetadata(`RCC Pipes in ${location.name} | NP3 & NP4 Supply`, location.intro, `/locations/${location.slug}/`)
}
export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
    const location = await getLocation(params)
    const url = `${site.url}/locations/${location.slug}/`
    const schema = {
        '@context': 'https://schema.org', '@type': 'Service', name: `RCC pipe supply to ${location.name}`,
        serviceType: 'RCC pipe supply', provider: { '@id': `${site.url}/#organization` },
        areaServed: { '@type': 'Place', name: `${location.name}, Karnataka` }, url,
        description: location.intro,
    }
    return <ContentPage eyebrow={`Supply areas / ${location.name}`} title={`RCC pipes in ${location.name}`} intro={location.intro}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
        <section className="location-supply"><div><h2 className="section-title">{location.heading}</h2><p className="body-copy">{location.delivery}</p><p className="body-copy mt-5">{location.planning}</p><div className="flex flex-wrap gap-6 mt-6"><a href={`tel:${site.telephone}`} className="text-link">Call {site.phone}</a><Link href="/contact/#quote" className="text-link">Request a quotation ↗</Link></div></div><figure><Image src="/images/sharavathi-pipe-yard.webp" alt="RCC pipe stock at the Sharavathi factory in Hosanagar" width={1800} height={1350} sizes="(max-width: 760px) 100vw, 45vw" /><figcaption>Our manufacturing location: Hosanagar, Karnataka.</figcaption></figure></section>
        <section><h2 className="section-title">Pipe classes &amp; dimensions</h2><p className="body-copy">We manufacture NP3 and NP4 RCC pipes. Our catalogue lists diameters from 150–1200 mm; confirm the required size, class, length and joint combination with sales. Pipe selection should follow your project engineer’s specification.</p><div className="location-grade-links"><Link href="/rcc-pipes/np3/">NP3 pipe details ↗</Link><Link href="/rcc-pipes/np4/">NP4 pipe details ↗</Link><Link href="/rcc-pipes/">Full pipe specification guide ↗</Link></div></section>
        <section className="location-order"><div><h2 className="section-title">Include with your enquiry</h2><ul><li>Pipe class, internal diameter, length and joint type</li><li>Number of pipes and any drawing references</li><li>Delivery address, map pin and site access</li><li>Required date and unloading arrangements</li></ul></div><div><h2 className="section-title">{location.question}</h2><p className="body-copy">{location.answer}</p><p className="body-copy mt-5">Pricing, availability, transport charges and dispatch dates are confirmed for each order.</p></div></section>
        <section><h2 className="section-title">Factory &amp; other supply areas</h2><p className="body-copy">All enquiries are handled by our Hosanagar factory. <Link className="text-link" href="/factory/">Factory address &amp; visiting details ↗</Link></p><nav className="location-grade-links" aria-label="Other RCC pipe supply areas">{locations.filter(item => item.slug !== location.slug).map(item => <Link key={item.slug} href={`/locations/${item.slug}/`}>RCC pipes in {item.name} ↗</Link>)}</nav></section>
    </ContentPage>
}
