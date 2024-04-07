// top level imports
import type { Metadata } from 'next'

// Constituent components
import { HOCDemo } from '@/components/HOCDemo'

// Component definition
export default function Portal() {
    return (
        <main>
            <h4 className='text-2xl mb-2 font-bold'>Higher Order Components (HOC)</h4>
            <p>HOC is a pattern in react that is implemented for the sake of code reusability.It is used in cross-cutting concerns i.e scenarios where a functionality is to be implemented consistently across various modules of the system.</p>
            <p><strong>HOC</strong> is a <em>special component</em> that accepts another component as a prop, enhances it and returns a new transformed component.</p>
            
            <p className='mt-4'>Example: </p>
            <div className='border-2 mt-2'>
                <HOCDemo />
            </div>
        </main>
    )
}

// static meta data config
export const metadata: Metadata = {
    title: 'HOC - React Concepts',
    description: 'A project that explore various React concepts',
}
