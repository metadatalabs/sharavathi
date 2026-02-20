import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
    title: 'Sharavathi Construction Products | RCC Pipes, Interlocking Tiles, Concrete Products Karnataka',
    description:
        'Sharavathi Construction Products manufactures high-quality RCC pipes, interlocking tiles, compound wall panels, and precision concrete moulded products using modern, world-class manufacturing techniques in Karnataka.',
    keywords:
        'RCC Pipes Karnataka, Interlocking Tiles, Compound Wall Panels, Concrete Products Manufacturer, Sharavathi Construction Products, Hosanagar Concrete Factory',
    authors: [{ name: 'Sharavathi Construction Products' }],
    openGraph: {
        title: 'Sharavathi Construction Products',
        description:
            'Manufacturer of RCC pipes, interlocking tiles, compound wall panels, and custom concrete products in Karnataka.',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
