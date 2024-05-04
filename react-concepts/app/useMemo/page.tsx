import { ReactElement } from "react";
import { Metadata } from "next";
import { MemoDemo } from "@/components/MemoDemo";

export default function useMemo(): ReactElement {
    return (
        <main>
            <h4 className='text-2xl mb-2 font-bold'>useMemo</h4>
            <p><strong>useMemo</strong> is a React Hook that lets you cache the result of a calculation between re-renders.</p>
            
            <code className='bg-gray-100 p-1 rounded'>const cachedValue = useMemo(calculateValue, dependencies)</code>

            <p>On the initial render, useMemo returns the result of calling <em>calculateValue</em> with no arguments.</p>
            <p>During next renders, it will either return an already stored value from the last render (if the dependencies haven’t changed), or call calculateValue again, and return the result that calculateValue has returned.</p>

            <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />

            <p className='mt-4 text-lg font-bold'>The below example demonstrates how useMemo allows us to subscribe to resize event of browser and returns dimensions of browser</p>

            <p className='mt-2 font-bold'>Example: </p>
            <div className='border-2 mt-2 p-2 mb-6'>
                <MemoDemo />
            </div>
        </main>
    )
}

export const metadata: Metadata = {
    title: 'useMemo - React Concepts',
    description: 'A project that explore various React concepts',
}
