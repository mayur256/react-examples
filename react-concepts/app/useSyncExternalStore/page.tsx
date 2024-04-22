import { ReactElement } from "react";
import { Metadata } from "next";
import { SyncExternalStore } from "@/components/SyncExternalStore";

export default function useSyncExternalStore(): ReactElement {
    return (
        <main>
            <h4 className='text-2xl mb-2 font-bold'>useSyncExternalStore</h4>
            <p><strong>useSyncExternalStore</strong> is a React Hook that lets you subscribe to ab external data source.</p>
            
            <code className='bg-gray-100 p-1 rounded'>const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)</code>

            <hr className="h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />

            <p className='mt-4 text-lg font-bold'>The below example demonstrates how useSyncExternalStore allows us to subscribe to resize event of browser and returns dimensions of browser</p>
            <p className='mt-2 font-bold'>Example: </p>
            <div className='border-2 mt-2 p-2 mb-6'>
                <SyncExternalStore />
            </div>
        </main>
    )
}

export const metadata: Metadata = {
    title: 'useSyncExternalStore - React Concepts',
    description: 'A project that explore various React concepts',
}
