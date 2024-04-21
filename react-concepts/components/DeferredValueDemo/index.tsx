"use client"
// top level imports
import { ReactElement, Suspense, useDeferredValue, useState } from "react";
import SearchResults from "./SearchResults";
import Loading from "@/app/loading";

// Component definition
export function DeferredValueDemo(): ReactElement {
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query) 

    return (
        <div className="p-1">
            <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Albums"
                required
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            
            <Suspense fallback={<Loading />}>
                <SearchResults query={deferredQuery} />
            </Suspense>
        </div>
    )
}
