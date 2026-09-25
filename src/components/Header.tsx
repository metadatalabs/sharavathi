'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { site } from '@/lib/site'

const links = [
    { href: '/products/', label: 'Products' },
    { href: '/rcc-pipes/', label: 'RCC pipes' },
    { href: '/precast/', label: 'Precast' },
    { href: '/factory/', label: 'Our factory' },
    { href: '/contact/', label: 'Contact' },
]
export default function Header() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    return <header className="site-header">
        <div className="utility-bar"><div className="site-container"><span>Manufactured in Hosanagar. Serving Karnataka.</span><a href={`tel:${site.telephone}`}>Sales & enquiries <span>{site.phone}</span></a></div></div>
        <div className="site-container header-main">
            <Link href="/" className="wordmark" aria-label="Sharavathi Construction Products home" onClick={() => setOpen(false)}><Image src="/sharavathi-logo.png" alt="" width={58} height={58} className="brand-logo" priority /><span>sharavathi<span className="wordmark-sub">CONSTRUCTION PRODUCTS</span></span></Link>
            <nav aria-label="Main navigation" className="desktop-nav">{links.map(link => <Link key={link.href} href={link.href} aria-current={(pathname + '/').startsWith(link.href) ? 'page' : undefined}>{link.label}</Link>)}</nav>
            <Link href="/contact/#quote" className="button-primary header-quote">Get a quote <span aria-hidden="true">↗</span></Link>
            <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button>
        </div>
        {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{links.map(link => <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}<span aria-hidden="true">↗</span></Link>)}<Link href="/contact/#quote" onClick={() => setOpen(false)}>Request a quote ↗</Link></nav>}
    </header>
}
