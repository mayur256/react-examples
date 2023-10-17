'use client'

// top level imports
import { ReactElement, useState } from "react";

// Component definition
export function StateHook(): ReactElement {
    // state definition
    const [count, setCount] = useState<number>(0);
    
    return (
        <div className="h-full flex items-center">
            <div className="text-center flex-grow">
                <p className="mb-2">Count: {count}</p>

                <button
                    onClick={() => setCount(prev => prev + 1)}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Increase Count
                </button>
            </div>
        </div>
    )
}
