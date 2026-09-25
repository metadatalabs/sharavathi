import Image from 'next/image'
import Link from 'next/link'
import ProductDrawing from '@/components/ProductDrawing'
import ProductUseIllustration from '@/components/ProductUseIllustration'
import { site } from '@/lib/site'

export default function HomePage() {
    return <>
        <section className="home-hero site-container">
            <div className="hero-copy"><p className="eyebrow"><span className="status-dot" />Hosanagar, Karnataka · Est. 2021</p><h1>RCC pipes &amp;<br />precast concrete.<br /><span>Hosanagar.</span></h1><p className="hero-description">Made in Hosanagar. Supply to Shivamogga, Sagara, Thirthahalli and nearby areas.</p><div className="hero-actions"><Link href="/products/" className="button-primary">View products <span aria-hidden="true">↗</span></Link><a href={`tel:${site.telephone}`} className="text-link">Call us <span aria-hidden="true">↗</span></a></div></div>
            <figure className="hero-image"><Image src="/images/sharavathi-pipe-yard.webp" alt="Rows of RCC pipes at the Sharavathi Construction Products factory in Hosanagar" fill sizes="(max-width: 760px) 100vw, 60vw" priority /><figcaption>OUR FACTORY <span>Hosanagar, Karnataka</span></figcaption></figure>
        </section>
        <div className="range-strip"><div className="site-container"><span>From our manufacturing range</span><Link href="/rcc-pipes/">NP3 & NP4 pipes ↗</Link><Link href="/precast/#pavers">Interlocking pavers ↗</Link><Link href="/precast/#compound-walls">Precast walls ↗</Link><Link href="/precast/#custom">Custom components ↗</Link></div></div>
        <section className="site-container section-space" id="products"><div className="section-heading"><div><p className="eyebrow">01 / Our products</p><h2>RCC pipes, pavers<br />&amp; compound walls.</h2></div><p>Choose a product to see sizes, photos and enquiry details.</p></div>
            <div className="product-overview"><Link className="featured-product" href="/rcc-pipes/"><div className="featured-product-top"><span className="eyebrow">Drainage & civil infrastructure</span><span className="round-arrow" aria-hidden="true">↗</span></div><ProductDrawing type="pipe"/><div><h3>RCC pipes</h3><p>NP3 & NP4 reinforced concrete pipes.<br />Check dimensions, class and availability.</p><span className="product-tag">NP3 / NP4</span><span className="product-tag">RCC / HUME PIPES</span></div></Link>
            <div className="product-list">{([
                ['pavers', 'Interlocking pavers', 'For pathways, parking areas and outdoor spaces.'],
                ['wall', 'Precast compound walls', 'Concrete panels and posts for site boundaries.'],
                ['custom', 'Custom precast', 'Send drawings for a manufacturing assessment.'],
            ] as const).map(([type,title,description],i) => <Link className="product-row" href={`/precast/#${type === 'wall' ? 'compound-walls' : type}`} key={type}><ProductDrawing type={type}/><div><span className="product-number">0{i+2}</span><h3>{title}</h3><p>{description}</p></div><span className="row-arrow" aria-hidden="true">↗</span></Link>)}</div></div>
        </section>
        <section className="site-container section-space uses-section" id="uses"><div className="section-heading"><div><p className="eyebrow">02 / Where they’re used</p><h2>What do you need to build?</h2></div></div><div className="use-grid">{([
            ['farm', 'Farm water drainage', 'RCC pipes', '/rcc-pipes/'],
            ['drainage', 'Road crossings & drains', 'RCC pipes', '/rcc-pipes/'],
            ['paving', 'Driveways & paths', 'Interlocking pavers', '/precast/#pavers'],
            ['boundary', 'Property boundaries', 'Precast compound walls', '/precast/#compound-walls'],
        ] as const).map(([type,title,product,href]) => <Link className="use-card" key={type} href={href}><ProductUseIllustration type={type}/><div className="use-card-copy"><h3>{title}</h3><span>{product} <span aria-hidden="true">↗</span></span></div></Link>)}</div><div className="flex justify-center mt-8"><Link href="/contact/" className="button-primary">Consult our team <span aria-hidden="true">↗</span></Link></div></section>
        <section className="factory-feature"><div className="site-container factory-feature-grid"><div><p className="eyebrow">03 / Our local roots</p><h2>The Sharavathi River.<br /><span>Our home in Hosanagar.</span></h2><p>We take our name from the Sharavathi River. Its basin includes Hosanagar, Sagara and Thirthahalli, the region where we manufacture and supply concrete products.</p><p>Our founder, Mahabala Rao, built Kallu Halla Bridge on the approach to Hosanagar, still in use today. He brings that experience of local construction, materials and suppliers to Sharavathi.</p><Link className="button-light" href="/factory/">Our story & factory <span aria-hidden="true">↗</span></Link></div><div className="location-panel"><span className="eyebrow">Our manufacturing address</span><div className="location-name">Hosanagar<span>Karnataka, India</span></div><p>{site.location}</p><a className="text-link" href={site.map} target="_blank" rel="noopener noreferrer">Find us on Google Maps ↗</a><div className="location-foot"><span>SHIVAMOGGA DISTRICT</span><span>577418</span></div></div></div></section>
        <section className="quote-band"><div className="site-container"><div><p className="eyebrow">Pricing & delivery</p><h2>Call or WhatsApp us</h2></div><div className="contact-actions"><a href={`tel:${site.telephone}`} className="button-primary">Call {site.phone}</a><a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="button-light">WhatsApp ↗</a></div></div></section>
    </>
}
