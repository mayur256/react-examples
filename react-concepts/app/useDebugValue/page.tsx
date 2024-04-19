// top level imports
import { DebugValueDemo } from '@/components/DebugValueDemo'
import type { Metadata } from 'next'

// Component definition
export default function UseDebugValue() {
    return (
        <main>
            <h4 className='text-2xl mb-2 font-bold'>useDebugValue</h4>
            <p><strong>useDebugValue</strong> is a React Hook that lets you add a label to a custom Hook in React DevTools.</p>
            
            <code className='bg-gray-100 p-1 rounded'>useDebugValue(value, format?)</code>

            <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />

            <p className='mt-4 text-lg font-bold'>The below example demonstrates how useDebugValue allows use add a label to our custom hook (useCounter) in Devtools. Please open React devtools Components tab and search for <em>DebugValueDemo</em> component to view this example in action </p>
            <p className='mt-2 font-bold'>Example: </p>
            <div className='border-2 mt-2 p-2 mb-6'>
                <DebugValueDemo />
            </div>
        </main>
    )
}

// static meta data config
export const metadata: Metadata = {
    title: 'useDebugValue - React Concepts',
    description: 'A project that explore various React concepts',
}
