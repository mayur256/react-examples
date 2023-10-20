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

            <p className='mt-3 font-bold'>How do we update arrays and objects with setState?</p>
            <p>It is recommended you always <em>replace the state value instead of mutating it directly as it does not allow React to render the component</em>.</p>
            <p>Example</p>
            <code className='bg-gray-100 p-1 rounded'>{`const [user, setUser] = useState({ name: 'John', age: 25 });`}</code>
            <p className='mt-1'>Instead of this,</p>
            <code className='bg-gray-100 p-1 rounded'>{`user.name = 'Alice' ;`}</code>
            <p className='mt-1'>Do this</p>
            <code className='bg-gray-100 p-1 rounded'>{`setUser({...user, name: 'Bob' });`}</code>

            <p className='mt-3 font-bold'>How can use a state initializer?</p>
            <p>React allows to pass a function to useState that provisions state initialisation</p>
            <code className='bg-gray-100 p-1 rounded'>{`const [user, setUser] = useState(() => { return { name: storage.name } });`}</code>
            <p>Here <em>storage</em> is basically a local data storage that can be used by react to initialise the component state.</p>

        </main>
    )
}

// static meta data config
export const metadata: Metadata = {
    title: 'useState - React Concepts',
    description: 'A project that explore various React concepts',
}
