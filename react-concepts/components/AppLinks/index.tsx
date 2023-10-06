// top level imports
import { ReactElement } from "react";
import Link from 'next/link'

export function AppLinks(): ReactElement {
    return (
        <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
        </ol>
    )
}