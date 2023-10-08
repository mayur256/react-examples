// top level imports
import type { Metadata } from 'next'

// Constituent components
import { PortalModal } from '@/components/PortalModal'

// Component definition
export default function Portal() {
    return (
        <main>
            <h4 className='text-2xl mb-2 font-bold'>Portals</h4>
            <p>Portals in react are a way to render a react child at any arbitary <em>DOM</em> node, instead of the usual hierarchical order.</p>
            <p>We use <strong>createPortal</strong> method of <em>react-dom</em> to render a JSX component into a DOM node</p>
            <code className='bg-gray-100 p-1 rounded'>createPortal(ReactChildren, DOMNode, key?)</code>
            <p className='mt-4'>Example: </p>
            <div className='border-2 mt-2'>
                <PortalModal />
            </div>
        </main>
    )
}

// static meta data config
export const metadata: Metadata = {
    title: 'Portal - React Concepts',
    description: 'A project that explore various React concepts',
}
