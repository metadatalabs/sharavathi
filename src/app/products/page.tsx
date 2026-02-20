import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Products | Sharavathi Construction Products',
    description:
        'Explore our range of RCC pipes, interlocking pavers, compound walls, and custom moulded concrete products.',
}

const products = [
    {
        name: 'RCC Pipes',
        description:
            'NP3 / NP4 grade reinforced concrete pipes manufactured per IS 458 standards. Available in various diameters for drainage, sewerage, and irrigation projects.',
        specs: ['NP3 & NP4 Grade', 'IS 458 Compliant', '150mm–1200mm Diameters', 'Spigot & Socket Joints'],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
            </svg>
        ),
    },
    {
        name: 'Interlocking Pavers',
        description:
            'High-density interlocking concrete pavers designed for heavy-duty roads, parking areas, driveways, and pedestrian pathways.',
        specs: ['M30–M50 Grade', 'Multiple Patterns', '60mm–100mm Thickness', 'Color Options Available'],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
            </svg>
        ),
    },
    {
        name: 'Compound Walls',
        description:
            'Precast concrete panels and posts for rapid boundary and perimeter wall construction. Cost-effective alternative to traditional brick walls.',
        specs: ['Precast Panels & Posts', 'Quick Installation', 'Various Heights', 'Weather Resistant'],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
            </svg>
        ),
    },
    {
        name: 'Custom Moulding',
        description:
            'Precision-moulded concrete components built to exact project specifications. Custom designs for unique infrastructure requirements.',
        specs: ['Custom Dimensions', 'Project-Specific', 'High Precision', 'Bulk Production'],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
]

export default function ProductsPage() {
    return (
        <>
            {/* Page Header */}
            <section className="bg-neutral-100 border-b border-neutral-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                    <p className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-3">
                        What We Manufacture
                    </p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark leading-tight mb-4">
                        Our Products
                    </h1>
                    <p className="text-neutral-500 max-w-2xl text-lg">
                        Precast and reinforced concrete products for civil infrastructure, stormwater
                        drainage, roads, and boundary construction across Karnataka.
                    </p>
                </div>
            </section>

            {/* Product Grid */}
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {products.map((product) => (
                            <div
                                key={product.name}
                                className="border border-neutral-200 p-10 group hover:border-brand-gold transition-colors duration-200"
                            >
                                <div className="w-12 h-12 border-2 border-brand-gold flex items-center justify-center mb-6 text-brand-gold">
                                    {product.icon}
                                </div>
                                <h2 className="text-xl font-bold text-brand-dark uppercase tracking-wider mb-3">
                                    {product.name}
                                </h2>
                                <p className="text-neutral-500 leading-relaxed mb-6">
                                    {product.description}
                                </p>
                                <div className="grid grid-cols-2 gap-2">
                                    {product.specs.map((spec) => (
                                        <div
                                            key={spec}
                                            className="bg-neutral-50 px-3 py-2 text-xs font-medium text-neutral-600 uppercase tracking-wider"
                                        >
                                            {spec}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-16 bg-brand-dark p-12 text-center">
                        <h3 className="text-2xl font-extrabold text-white mb-4">
                            Need a Custom Quote?
                        </h3>
                        <p className="text-neutral-400 mb-8 max-w-lg mx-auto">
                            Contact our sales team for pricing, bulk orders, and custom specifications.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/919353069590"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-brand-gold hover:bg-yellow-600 text-brand-dark px-8 py-3.5 text-sm font-semibold uppercase tracking-wide inline-flex items-center justify-center gap-2 transition-colors duration-200"
                            >
                                Enquire on WhatsApp
                            </a>
                            <Link
                                href="/contact"
                                className="border-2 border-brand-gold text-brand-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wide hover:bg-brand-gold hover:text-brand-dark transition-colors duration-200 text-center"
                            >
                                Contact Page
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
