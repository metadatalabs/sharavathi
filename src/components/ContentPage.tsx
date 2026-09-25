import Link from 'next/link'
export default function ContentPage({ title, eyebrow, intro, children }: { title: string; eyebrow: string; intro: string; children: React.ReactNode }) {
    return <>
        <section className="page-intro"><div className="site-container"><nav aria-label="Breadcrumb" className="breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>{eyebrow}</span></nav><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-description">{intro}</p></div></section>
        <div className="site-container content-body">{children}</div>
        <section className="quote-band"><div className="site-container"><div><p className="eyebrow">Sales enquiries</p><h2>Request pricing & delivery details</h2><p>Share specifications, quantity and delivery location with our team.</p></div><Link href="/contact/#quote" className="button-primary">Request a quote ↗</Link></div></section>
    </>
}
