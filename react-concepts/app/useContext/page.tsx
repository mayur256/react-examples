// top level imports
import { ReactElement } from 'react'
import type { Metadata } from 'next'

import { ContextDemo } from '@/components/ContextDemo'

// Component definition
export default function UseContext(): ReactElement {
    return (
        <main>
            <h4 className='text-2xl mb-2 font-bold'>useContext</h4>
            <p>The <strong>useContext</strong> is a React Hook that lets you read and subscribe to context from your component.</p>
            <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
            <p>The Context API is an elegant alternative to circumvent the issue of <em>props drilling</em></p>
            <h6 className='text-xl mt-4 font-bold'>Synopsis</h6>
            <code className='bg-gray-100 p-1 rounded'>useContext(Context);</code>
            <p>Here <strong>Context</strong> is a special javascript object that is created with help of <em>createContext</em> function from React API</p>

            <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />

            <p className='mt-4 text-lg font-bold'>The below example demonstrates how we can use <strong>useContext</strong> hook to access and update context value anywhere down the React tree </p>
            <p className='mt-2 font-bold'>Example: </p>
            <div className='border-2 mt-2 p-2 mb-6'>
                <ContextDemo />
            </div>

        </main>
    )
}

// static meta data config
export const metadata: Metadata = {
    title: 'useContext - React Concepts',
    description: 'A project that explore various React concepts',
}
