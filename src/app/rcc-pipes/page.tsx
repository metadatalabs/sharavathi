import Image from 'next/image'
import { locations } from '@/lib/locations'
import Link from 'next/link'
import ContentPage from '@/components/ContentPage'
import { pageMetadata } from '@/lib/site'

export const metadata = pageMetadata('RCC Pipe Manufacturer in Hosanagar, Shivamogga', 'NP3 and NP4 RCC pipes from Sharavathi Construction Products in Hosanagar, Shivamogga, Karnataka. Discuss diameter, joint type, quantity and delivery.', '/rcc-pipes/')

export default function RCCPipesPage() {
    return <ContentPage eyebrow="RCC / Hume pipes" title="RCC pipes from Hosanagar, Shivamogga" intro="Sharavathi Construction Products manufactures NP3 and NP4 reinforced cement concrete pipes for drainage, sewerage and civil infrastructure projects in Karnataka.">
        <section><div className="pipe-intro"><div><h2 className="section-title">Start with your project specification</h2><p className="body-copy">Select the pipe class and diameter specified in your project drawings. Share the required length, joint detail and quantity with our team to confirm the manufacturing specification and delivery schedule.</p></div><figure className="pipe-illustration"><Image src="/images/concrete-pipes.webp" alt="Illustration of three concrete pipes showing their cylindrical form" width={1600} height={1067} sizes="(max-width: 760px) 100vw, 50vw" /><figcaption>Product illustration</figcaption></figure></div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">{['NP3', 'NP4'].map(grade => <Link className="border border-neutral-300 p-8 hover:border-brand-gold" key={grade} href={`/rcc-pipes/${grade.toLowerCase()}/`}><h3 className="text-xl font-bold mb-3">{grade} RCC pipes</h3><p className="text-neutral-600 mb-5">Enquire against your specified {grade} pipe requirements, dimensions and project drawings.</p><span className="font-semibold underline underline-offset-4">View {grade} enquiry details →</span></Link>)}</div>
        </section>
        <section><h2 className="section-title">Pipe specification &amp; availability</h2><p className="body-copy mb-6">Our existing catalogue lists diameters from 150 mm to 1200 mm. Confirm the required diameter and class combination before ordering.</p>
            <div className="overflow-x-auto"><table className="spec-table"><caption className="sr-only">RCC pipe catalogue and details to confirm with sales</caption><thead><tr><th scope="col">Specification</th><th scope="col">Catalogue / enquiry details</th></tr></thead><tbody>
                <tr><th scope="row">Diameter</th><td>150–1200 mm; ask about your required size</td></tr>
                <tr><th scope="row">Class</th><td>NP3 / NP4, as specified for your project</td></tr>
                <tr><th scope="row">Length</th><td>Confirm required and available lengths with sales</td></tr>
                <tr><th scope="row">Joint type</th><td>Spigot &amp; socket listed in our catalogue; confirm for the selected pipe</td></tr>
                <tr><th scope="row">Application</th><td>Drainage, sewerage and infrastructure, subject to project design</td></tr>
                <tr><th scope="row">Availability &amp; lead time</th><td>Confirmed when quoting your size, class and quantity</td></tr>
            </tbody></table></div>
        </section>
        <section><h2 className="section-title">Delivery enquiries across the region</h2><p className="body-copy">For projects in Hosanagar, Shivamogga (Shimoga), Sagara, Thirthahalli or elsewhere in Karnataka, send your delivery location with the enquiry. Transport, unloading requirements and scheduling are agreed for each order.</p><nav className="location-grade-links" aria-label="RCC pipe supply areas">{locations.map(location => <Link key={location.slug} href={`/locations/${location.slug}/`}>{location.name} ↗</Link>)}</nav><Link href="/factory/" className="inline-block mt-5 underline underline-offset-4 font-semibold">Factory location &amp; order planning →</Link></section>
    </ContentPage>
}
