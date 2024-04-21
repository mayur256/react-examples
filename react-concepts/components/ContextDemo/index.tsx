"use client"

import { ReactElement } from "react";

import { ThemeCtxWrapper, useTheme } from "@/src/context/ThemeCtx";

function Home(): ReactElement {
    const { theme } = useTheme()
    return (
        <div className="p-1">
            <h5>Home</h5>
            <p>Theme: {theme}</p>
        </div>
    )
}

function Dashboard(): ReactElement {
    return (
        <div className="p-1">
            Dashboard
            <ThemeToggler />
        </div>
    )
}

function ThemeToggler(): ReactElement {
    const { theme, setTheme } = useTheme();

    return (
        <div className="p-1">
            <h5>Theme Toggler</h5>

            <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => setTheme?.(theme === "dark" ? 'light' : "dark")}
            >
                Toggle Theme
            </button>
        </div>
    )
}

export function ContextDemo(): ReactElement {
    return (
        <ThemeCtxWrapper>
            <div className="grid grid-cols-2">
                <div className="border-2 border-indigo-600 p-1">
                    <Home />
                </div>

                <div className="border-2 border-indigo-600 p-1">
                    <Dashboard />
                </div>
            </div>
        </ThemeCtxWrapper>
    )
}