import Image from 'next/image'
import Link from 'next/link'
import ContentPage from '@/components/ContentPage'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata('Precast Concrete Products in Shivamogga', 'Interlocking pavers, precast compound walls and custom concrete components from Sharavathi Construction Products, Hosanagar, Karnataka.', '/precast/')
export default function PrecastPage() {
    return <ContentPage eyebrow="Beyond RCC pipes" title="Pavers & precast compound walls" intro="Interlocking pavers, compound wall panels and posts, and custom moulded concrete components from Sharavathi Construction Products in Hosanagar, Karnataka.">
        <section className="precast-product" id="pavers">
            <figure className="precast-photo paver-photo"><Image src="/images/sharavathi-paver-display.webp" alt="Sharavathi concrete paver samples in yellow, red, white and charcoal on a blue display rack" width={900} height={1600} sizes="(max-width: 760px) 100vw, 45vw" /><figcaption>A selection of our concrete paver shapes and colours.</figcaption></figure>
            <div className="precast-copy"><p className="eyebrow">01 / Outdoor surfaces</p><h2>Interlocking pavers</h2><p>For driveways, parking areas and pedestrian pathways. Ask about available shapes, colours and thicknesses.</p><h3>Plan your paving</h3><p>Share the paved area, intended use, required thickness, pattern and colour. Our team can confirm the available options for your enquiry.</p><Link href="/contact/#quote" className="text-link">Enquire about pavers ↗</Link></div>
        </section>
        <section className="precast-product wall-product" id="compound-walls">
            <figure className="precast-photo"><Image src="/images/sharavathi-precast-wall.webp" alt="Installed precast concrete compound wall with horizontal panels, posts and decorative fan-shaped tops" width={1800} height={810} sizes="(max-width: 760px) 100vw, 55vw" /><figcaption>Precast panels and posts, shown in an installed boundary wall.</figcaption></figure>
            <div className="precast-copy"><p className="eyebrow">02 / Site boundaries</p><h2>Precast compound walls</h2><p>Concrete panels and posts for perimeter and boundary construction.</p><h3>Define your boundary</h3><p>Share the boundary length, required height, site location and drawings. We’ll discuss the panel configuration and requirements for your site.</p><Link href="/contact/#quote" className="text-link">Enquire about compound walls ↗</Link></div>
        </section>
        <section className="precast-custom" id="custom"><div><p className="eyebrow">03 / Project-specific requirements</p><h2 className="section-title">Custom concrete components</h2><p className="body-copy">Send dimensions, drawings, quantity and application so our team can assess manufacturing feasibility for your civil infrastructure project.</p></div><Link href="/contact/#quote" className="text-link">Discuss your component ↗</Link></section>
        <p className="body-copy">Dimensions, finish, availability and delivery schedules are confirmed against each enquiry. Include your site location and required date when contacting our team.</p>
    </ContentPage>
}
