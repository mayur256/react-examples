// top level imports
import { ReactElement } from "react";
import type { Metadata } from 'next'
import { DeferredValueDemo } from "@/components/DeferredValueDemo";

export default function useDeferredValue(): ReactElement {
    return (
        <main>
            <h4 className='text-2xl mb-2 font-bold'>useDeferredValue</h4>
            <p>The <strong>useDeferredValue</strong> hook provisions defer updating a part of the UI</p>
            <code className="bg-gray-100 p-1 rounded">const deferredValue = useDeferredValue(value)</code>

            <p className='mt-4 font-bold'>Example: </p>
            <div className='border-2 mt-2'>
                <DeferredValueDemo />
            </div>
        </main>
    )
}

// static meta data config
export const metadata: Metadata = {
    title: 'useDeferredValue - React Concepts',
    description: 'A project that explore various React concepts',
}
