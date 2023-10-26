// top level imports
import { EffectHook } from '@/components/EffectHook'
import type { Metadata } from 'next'

// Component definition
export default function UseEffect() {
    return (
        <main>
            <h4 className='text-2xl mb-2 font-bold'>useEffect</h4>
            <p>The <strong>useEffect</strong> hook let us <em>synchronize our React component with some external system</em> </p>
            <p>It run immediately after the component is rendered and allows us to run some effects at that point</p>

            <h6 className='text-xl mt-4 font-bold'>Synopsis</h6>
            <code className='bg-gray-100 p-1 rounded'>useEffect(setup, dependencies?);</code>
            <p>Here <strong>setup</strong> is a callback function that executes on initial render or every time when the dependencies change. </p>
            <p><strong>dependencies</strong> are an array of react properties, be it a <em>state variable, props or context value</em>.</p>

            <p className='mt-4'>It has three prevalent versions of usage</p>
            <ol className='list-decimal ps-4'>
                <li>
                    <strong>Without any dependency list</strong>: Runs on initial component rendering and every subsequent re-render.
                </li>
                <code className='bg-gray-100 p-1 rounded'>{`useEffect(() => { console.log("I will run on every render") })`}</code>

                <li>
                    <strong>With empty dependency list</strong>: Runs only once on initial component render.
                </li>
                <code className='bg-gray-100 p-1 rounded'>{`useEffect(() => { console.log("I will run only once on first render") }, [])`}</code>

                <li>
                    <strong>With one or more items in dependency list</strong>: Runs on initial component render and every time the observable items in dependency list changes..
                </li>
                <code className='bg-gray-100 p-1 rounded'>{`useEffect(() => { console.log("I will run on initial render and on every change of dep1 and dep2") }, [dep1, dep2])`}</code>
            </ol>

            <p className='mt-4 font-bold'>Example: </p>
            <div className='border-2 mt-2'>
                <EffectHook />
            </div>
        </main>
    )
}

// static meta data config
export const metadata: Metadata = {
    title: 'useEffect - React Concepts',
    description: 'A project that explore various React concepts',
}
