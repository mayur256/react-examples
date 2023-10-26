import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Constituent components
import { AppLinks } from '@/components/AppLinks'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'React Concepts',
    description: 'A project that explore various React concepts',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className} style={{ height: 'unset' }}>
                <div className='grid grid-cols-6 divide-x grid-rows-1 h-full'>
                    <div className='p-2 max-h-screen min-h-screen overflow-auto'>
                        <AppLinks />
                    </div>
                    <div className='col-span-5 p-2'>{children}</div>
                </div>
            </body>
        </html>
    )
}
