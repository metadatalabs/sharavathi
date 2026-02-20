export default function Footer() {
    return (
        <footer className="bg-brand-dark border-t-2 border-brand-gold">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-neutral-500">
                    <div>
                        &copy; {new Date().getFullYear()} Sharavathi Construction Products
                    </div>
                    <div className="text-xs uppercase tracking-widest">
                        RCC Pipes &bull; Pavers &bull; Precast Walls &bull; Karnataka
                    </div>
                </div>
                <div className="mt-5 pt-5 border-t border-neutral-800 text-[11px] text-neutral-600 text-right uppercase tracking-widest">
                    GSTIN: 29AEHFS5163D1ZV
                </div>
            </div>
        </footer>
    )
}
