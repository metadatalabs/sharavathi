import { locations } from '@/lib/locations'
import Link from 'next/link'
import Image from 'next/image'
import { site } from '@/lib/site'
export default function Footer() {
    return <footer className="site-footer"><div className="site-container">
        <div className="footer-grid"><div><Link className="footer-wordmark" href="/" aria-label="Sharavathi Construction Products home"><Image src="/sharavathi-logo.png" alt="" width={48} height={48} className="brand-logo" /><span>sharavathi</span></Link><p>RCC pipes & precast concrete.<br />Hosanagar, Karnataka.</p></div>
            <div><h2>Explore</h2><Link href="/rcc-pipes/">RCC pipes</Link><Link href="/precast/">Precast products</Link><Link href="/factory/">Our factory</Link></div>
            <div><h2>Talk to our team</h2><a href={`tel:${site.telephone}`}>{site.phone}</a><a href="tel:+919448628412">+91 94486 28412</a><a href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a></div>
            <div><h2>Visit us</h2><p>{site.location}</p><a href={site.map} target="_blank" rel="noopener noreferrer">Get directions ↗</a></div></div>
        <nav className="supply-area-links" aria-label="RCC pipe supply areas"><span>RCC pipe supply</span>{locations.map(location => <Link key={location.slug} href={`/locations/${location.slug}/`}>{location.name}</Link>)}</nav><div className="footer-base"><span>© {new Date().getFullYear()} Sharavathi Construction Products</span><span>GSTIN: 29AEHFS5163D1ZV</span><Link href="/contact/#quote">Request a quote ↗</Link></div>
    </div></footer>
}
