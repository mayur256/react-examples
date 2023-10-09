// top level imports
import type { Metadata } from 'next'

// Constituent components
import { StateHook } from '@/components/StateHook'

// Component definition
export default function UseState() {
    return (
        <main>
            <h4 className='text-2xl mb-2 font-bold'>useState</h4>
            <p>The useState hook of React facilitates adding reactive state variables to a component.</p>
            <p>A state is an obervable value, that notifies a component to re-render whenever it changes.</p>
            <code className='bg-gray-100 p-1 rounded'>const [state, stateSetter] = useState(initialValue);</code>
            <p className='mt-4'>Example: </p>
            <div className='border-2 mt-2'>
                <StateHook />
            </div>
        </main>
    )
}

// static meta data config
export const metadata: Metadata = {
    title: 'useState - React Concepts',
    description: 'A project that explore various React concepts',
}
