import PipeCanvas from '@/components/PipeCanvas'

export default function HomePage() {
    return (
        <>
            {/* HERO */}
            <section className="bg-neutral-100 relative">
                <PipeCanvas variant="desktop" />
                <div className="max-w-7xl mx-auto md:py-20 relative z-10">
                    <div className="w-full md:hidden">
                        <PipeCanvas variant="mobile" />
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:min-h-[520px]">
                        <div className="w-full md:w-1/2 p-10 md:p-14 bg-white border-l-4 border-brand-gold">
                            <p className="text-xs uppercase tracking-[0.25em] text-neutral-400 mb-6 font-medium">
                                Est. 2021 &mdash; Karnataka, India
                            </p>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark leading-[1.15] mb-6">
                                Reinforced Concrete
                                <br />
                                for Critical Infrastructure
                            </h1>
                            <p className="text-base text-neutral-500 mb-10 max-w-lg leading-relaxed">
                                IS-standard RCC pipes, interlocking pavers, precast boundary walls, and
                                custom-moulded concrete components — manufactured for government and private
                                infrastructure projects across Karnataka.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href="https://wa.me/919353069590"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-brand-dark hover:bg-brand-charcoal text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wide flex items-center justify-center gap-2 transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    Enquire Now
                                </a>
                                <a
                                    href="https://share.google/HJa3st1DbUs1Acy6M"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border-2 border-brand-gold text-brand-dark px-8 py-3.5 text-sm font-semibold uppercase tracking-wide hover:bg-brand-gold transition-colors duration-200 text-center"
                                >
                                    View Location
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRODUCTS */}
            <section id="products" className="bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                    <p className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-3">
                        What We Manufacture
                    </p>
                    <h2 className="text-3xl font-extrabold text-brand-dark mb-4">Product Range</h2>
                    <p className="text-neutral-500 max-w-2xl mb-14">
                        Precast and reinforced concrete products for civil infrastructure, stormwater
                        drainage, roads, and boundary construction.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200">
                        <div className="bg-white p-8 group hover:bg-brand-dark transition-colors duration-200">
                            <div className="w-10 h-10 border-2 border-brand-gold flex items-center justify-center mb-5 group-hover:bg-brand-gold transition-colors duration-200">
                                <svg className="w-5 h-5 text-brand-gold group-hover:text-brand-dark transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="9" />
                                </svg>
                            </div>
                            <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider mb-2 group-hover:text-white transition-colors duration-200">
                                RCC Pipes
                            </h3>
                            <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors duration-200">
                                NP3 / NP4 grade reinforced concrete pipes per IS 458 for drainage &amp; sewerage
                            </p>
                        </div>
                        <div className="bg-white p-8 group hover:bg-brand-dark transition-colors duration-200">
                            <div className="w-10 h-10 border-2 border-brand-gold flex items-center justify-center mb-5 group-hover:bg-brand-gold transition-colors duration-200">
                                <svg className="w-5 h-5 text-brand-gold group-hover:text-brand-dark transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                                </svg>
                            </div>
                            <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider mb-2 group-hover:text-white transition-colors duration-200">
                                Interlocking Pavers
                            </h3>
                            <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors duration-200">
                                High-density pavers for roads, parking areas, and pedestrian pathways
                            </p>
                        </div>
                        <div className="bg-white p-8 group hover:bg-brand-dark transition-colors duration-200">
                            <div className="w-10 h-10 border-2 border-brand-gold flex items-center justify-center mb-5 group-hover:bg-brand-gold transition-colors duration-200">
                                <svg className="w-5 h-5 text-brand-gold group-hover:text-brand-dark transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
                                </svg>
                            </div>
                            <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider mb-2 group-hover:text-white transition-colors duration-200">
                                Compound Walls
                            </h3>
                            <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors duration-200">
                                Precast panels &amp; posts for perimeter and boundary wall construction
                            </p>
                        </div>
                        <div className="bg-white p-8 group hover:bg-brand-dark transition-colors duration-200">
                            <div className="w-10 h-10 border-2 border-brand-gold flex items-center justify-center mb-5 group-hover:bg-brand-gold transition-colors duration-200">
                                <svg className="w-5 h-5 text-brand-gold group-hover:text-brand-dark transition-colors duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <h3 className="text-sm font-bold text-brand-dark uppercase tracking-wider mb-2 group-hover:text-white transition-colors duration-200">
                                Custom Moulding
                            </h3>
                            <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors duration-200">
                                Precision-moulded concrete components built to project specifications
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* LEADERSHIP */}
            <section id="leadership" className="bg-brand-dark text-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                    <p className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-3">
                        Leadership
                    </p>
                    <h2 className="text-3xl font-extrabold mb-12">Management</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-700">
                        <div className="bg-brand-dark p-10">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-6">
                                Managing Partners
                            </h3>
                            <ul className="space-y-3 text-neutral-300">
                                <li className="text-lg">Mr. Mahabala Rao</li>
                                <li className="text-lg">Ms. Anitha Rao</li>
                                <li className="text-lg">Mr. Suresh Swamyrao</li>
                                <li className="text-lg">Mr. Rasal Raju</li>
                            </ul>
                        </div>
                        <div className="bg-brand-dark p-10">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-6">
                                Our Founder
                            </h3>
                            <p className="text-lg text-neutral-300">Mr. Mahabala Rao</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                    <p className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-3">
                        Reach Us
                    </p>
                    <h2 className="text-3xl font-extrabold text-brand-dark mb-12">Contact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200">
                        <div className="bg-white p-10">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-8">
                                Sales Enquiries
                            </h3>
                            <div className="space-y-4">
                                <a
                                    href="tel:+919353069590"
                                    className="flex items-center gap-4 bg-brand-dark hover:bg-brand-charcoal text-white p-5 transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                                    </svg>
                                    <div>
                                        <div className="text-xs text-neutral-400 uppercase tracking-wider">Call</div>
                                        <div className="text-lg font-bold">+91 93530 69590</div>
                                    </div>
                                </a>
                                <a
                                    href="tel:+919448628412"
                                    className="flex items-center gap-4 bg-brand-dark hover:bg-brand-charcoal text-white p-5 transition-colors duration-200"
                                >
                                    <svg className="w-5 h-5 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                                    </svg>
                                    <div>
                                        <div className="text-xs text-neutral-400 uppercase tracking-wider">Call</div>
                                        <div className="text-lg font-bold">+91 94486 28412</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="bg-white p-10">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-8">
                                Manufacturing Facility
                            </h3>
                            <iframe
                                src="https://storage.googleapis.com/maps-solutions-vsgvlt491o/locator-plus/4pi0/locator-plus.html"
                                width="100%"
                                style={{ border: 0, minHeight: 360 }}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
