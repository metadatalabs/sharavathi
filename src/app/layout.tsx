import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'
import { pageMetadata, site } from '@/lib/site'

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    ...pageMetadata('RCC Pipes & Precast Concrete in Hosanagar, Shivamogga',
        'Sharavathi Construction Products manufactures NP3 and NP4 RCC pipes, pavers and precast concrete in Hosanagar, Shivamogga, Karnataka. Request a project quotation.', '/'),
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" data-scroll-behavior="smooth">
            <body className={`${inter.className} antialiased`}>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org', '@type': ['Organization', 'LocalBusiness'],
                    '@id': `${site.url}/#organization`, name: site.name, url: site.url,
                    logo: `${site.url}/sharavathi-logo.png`, telephone: site.telephone,
                    address: { '@type': 'PostalAddress', streetAddress: 'Jayanagar, Melinabesige', postalCode: '577418', addressLocality: 'Hosanagar', addressRegion: 'Karnataka', addressCountry: 'IN' },
                    contactPoint: { '@type': 'ContactPoint', telephone: site.telephone, contactType: 'sales' },
                }).replace(/</g, '\\u003c') }} />
                <a href="#main-content" className="skip-link">Skip to content</a>
                <Header />
                <main id="main-content">{children}</main>
                <Footer />
            </body>
        </html>
    )
}
