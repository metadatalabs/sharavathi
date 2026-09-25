import { notFound } from 'next/navigation'
import Link from 'next/link'
import ContentPage from '@/components/ContentPage'
import { pageMetadata, site } from '@/lib/site'

const grades = ['np3', 'np4']
export const dynamicParams = false
export function generateStaticParams() { return grades.map(grade => ({ grade })) }
export async function generateMetadata({ params }: { params: Promise<{ grade: string }> }) {
    const { grade } = await params
    if (!grades.includes(grade)) notFound()
    return pageMetadata(`${grade.toUpperCase()} RCC Pipes in Shivamogga`, `Enquire about ${grade.toUpperCase()} RCC pipes from Sharavathi in Hosanagar, Karnataka. Confirm diameter, length, joint type and delivery for your project.`, `/rcc-pipes/${grade}/`)
}
export default async function GradePage({ params }: { params: Promise<{ grade: string }> }) {
    const { grade } = await params
    if (!grades.includes(grade)) notFound()
    const label = grade.toUpperCase()
    const other = grade === 'np3' ? 'NP4' : 'NP3'
    const schema = { '@context': 'https://schema.org', '@type': 'Product', name: `${label} RCC pipes`, description: `${label} reinforced cement concrete pipes. Dimensions, availability and delivery confirmed on enquiry.`, category: 'Reinforced cement concrete pipes', brand: { '@type': 'Brand', name: site.name }, manufacturer: { '@id': `${site.url}/#organization` }, url: `${site.url}/rcc-pipes/${grade}/` }
    return <ContentPage eyebrow="RCC pipe range" title={`${label} RCC pipes`} intro={`${label} reinforced cement concrete pipes manufactured by Sharavathi Construction Products in Hosanagar, Shivamogga district, Karnataka. Send your project specification for a quotation.`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
        <section><h2 className="section-title">Ordering {label} pipes</h2><p className="body-copy">If your project specifies {label}, include that class in the enquiry together with the internal diameter, pipe length and joint detail. Pipe selection should follow your project engineer’s specification; the class alone does not establish suitability for a particular installation.</p></section>
        <section><h2 className="section-title">Details needed for your quotation</h2><ul className="grid sm:grid-cols-2 gap-4">{['Internal diameter and required length', `${label} class and applicable project specification`, 'Joint type and any drawing references', 'Number of pipes or total pipeline length', 'Delivery town and site access', 'Required date and phased delivery needs'].map(item => <li key={item} className="bg-neutral-100 border-l-2 border-brand-gold p-5">{item}</li>)}</ul><p className="body-copy mt-6">The catalogue’s overall diameter range is 150–1200 mm. Ask our team to confirm which sizes and lengths can be supplied in {label}, along with current availability and transport costs.</p></section>
        <section className="flex flex-wrap gap-6"><Link className="underline underline-offset-4" href="/rcc-pipes/">All RCC pipe specifications →</Link><Link className="underline underline-offset-4" href={`/rcc-pipes/${other.toLowerCase()}/`}>{other} pipe enquiries →</Link></section>
    </ContentPage>
}
