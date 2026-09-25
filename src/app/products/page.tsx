import Image from 'next/image'
import Link from 'next/link'
import ContentPage from '@/components/ContentPage'
import ProductDrawing from '@/components/ProductDrawing'
import { pageMetadata } from '@/lib/site'
export const metadata = pageMetadata('RCC Pipes & Precast Product Catalogue', 'Explore NP3 and NP4 RCC pipes, interlocking pavers, compound walls and custom concrete products from Hosanagar, Shivamogga, Karnataka.', '/products/')
export default function ProductsPage() {
    return <ContentPage eyebrow="Our products" title="RCC pipes & precast products" intro="RCC pipes and precast products for drainage, site development and civil infrastructure. Manufactured in Hosanagar, Karnataka."><div className="catalogue-grid">{([
        ['pipe','RCC pipes','NP3 and NP4 reinforced concrete pipes for drainage and civil infrastructure.','Classes, dimensions & enquiry details','/rcc-pipes/'],
        ['pavers','Interlocking pavers','Concrete pavers for outdoor surfaces, pathways and parking areas.','Discuss patterns, thickness & quantities','/precast/#pavers'],
        ['wall','Compound walls','Precast concrete panels and posts for boundary and perimeter construction.','Discuss dimensions & site requirements','/precast/#compound-walls'],
        ['custom','Custom precast','Project-specific concrete components. Send your drawings for a manufacturing assessment.','Send component drawings','/precast/#custom'],
    ] as const).map(([type,title,desc,cta,href]) => <Link href={href} className="catalogue-item" key={title}><div className="catalogue-drawing">{type !== 'custom' ? <Image className={`catalogue-photo ${type}`} src={`/images/sharavathi-${type === 'pavers' ? 'paver-display' : type === 'wall' ? 'precast-wall' : 'pipe-yard'}.webp`} alt={type === 'pavers' ? 'Detail of coloured concrete paver samples on our display rack' : type === 'wall' ? 'Installed precast compound wall with decorative tops' : 'RCC pipes at our Hosanagar factory'} fill sizes="(max-width: 760px) 100vw, 50vw" /> : <ProductDrawing type={type}/>}<span className="round-arrow">↗</span></div><h2>{title}</h2><p>{desc}</p><span className="text-link">{cta} ↗</span></Link>)}</div></ContentPage>
}
