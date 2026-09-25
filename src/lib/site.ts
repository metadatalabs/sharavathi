import { locations } from './locations'
import type { Metadata } from 'next'

export const site = {
    name: 'Sharavathi Construction Products',
    url: 'https://sharavathi.co',
    phone: '+91 93530 69590',
    telephone: '+919353069590',
    whatsapp: 'https://wa.me/919353069590',
    location: 'Jayanagar, Melinabesige, Hosanagar, Karnataka 577418',
    map: 'https://share.google/gVQA7UjjL3IuhiSBI',
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
    const url = `${site.url}${path}`
    return {
        title: `${title} | ${site.name}`,
        description,
        alternates: { canonical: url },
        openGraph: { title: `${title} | ${site.name}`, description, url, type: 'website', locale: 'en_IN', siteName: site.name, images: [{ url: `${site.url}/images/sharavathi-pipe-yard.webp`, width: 1800, height: 1350, alt: 'Sharavathi RCC pipe factory in Hosanagar' }] },
        twitter: { card: 'summary_large_image', title: `${title} | ${site.name}`, description, images: [`${site.url}/images/sharavathi-pipe-yard.webp`] },
    }
}

export const routes = ['/', '/products/', '/rcc-pipes/', '/rcc-pipes/np3/', '/rcc-pipes/np4/', '/precast/', '/factory/', '/contact/', ...locations.map(location => `/locations/${location.slug}/`)]
