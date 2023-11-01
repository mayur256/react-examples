// top level imports
import type { Metadata } from 'next'

// Component definition
export default function UseContext() {
    return (
        <main>
            <h4 className='text-2xl mb-2 font-bold'>useContext</h4>
            <p>The <strong>useEffect</strong> hook allows you to create an observable object in React that components can subscribe to.</p>
            <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
            <p>The Context API is an elegant alternative to circumvent the issue of <em>props drilling</em></p>
            <h6 className='text-xl mt-4 font-bold'>Synopsis</h6>
            <code className='bg-gray-100 p-1 rounded'>useContext(Context);</code>
            <p>Here <strong>Context</strong> is a special javascript object that is created with help of <em>createContext</em> function from React API</p>
        </main>
    )
}

// static meta data config
export const metadata: Metadata = {
    title: 'useContext - React Concepts',
    description: 'A project that explore various React concepts',
}
