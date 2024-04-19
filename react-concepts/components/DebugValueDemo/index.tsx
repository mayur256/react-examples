"use client"

import { ReactElement } from "react";

import { useCounter } from "@/src/hooks/useCounter";

export function DebugValueDemo(): ReactElement {
    const { counter, setCounter } = useCounter(0);
    // main renderer
    return (
        <div>
            <p>Counter: {counter}</p>

            <div className="mt-2">
                <button
                    onClick={() => setCounter(prev => prev + 1)}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Increase
                </button>
                <button
                    type="button"
                    onClick={() => setCounter(prev => prev - 1)}
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                    Decrease
                </button>
            </div>
        </div>
    )
};
