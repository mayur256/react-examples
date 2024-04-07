'use client'

// top level imports
import { ReactElement } from "react";
import Link from 'next/link';
import { usePathname } from "next/navigation";

// Component definition
export function AppLinks(): ReactElement {
    // Constants
    const routes: Array<{ key: string, label: string }> = [
        { key: '/', label: 'Home' },
        { key: '/portal', label: 'Portal' },
        { key: '/useState', label: 'useState' },
        { key: '/useEffect', label: 'useEffect' },
        { key: '/hoc', label: 'HOC' }
    ];
    const activeClass = "bg-blue-400 text-white";

    // hooks
    const pathname = usePathname();

    // main renderer
    return (
        <ol>
            {routes.map(({ key, label }) => (
                <Link href={key} key={key}>
                    <li className={`text-center p-2 rounded ${pathname === key ? activeClass : ''}`}>
                        {label}
                    </li>
                </Link>
            ))}
        </ol>
    )
}
