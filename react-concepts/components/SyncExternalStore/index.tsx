"use client";

import { ReactElement, useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
    window.addEventListener('resize', callback);

    return () => {
        window.removeEventListener('resize', callback)
    }
}

function getSnapshot() {
    return { height: window.innerHeight, width: window.innerWidth }
}

export function SyncExternalStore(): ReactElement {
    const dimensions = useSyncExternalStore(subscribe, getSnapshot);

    return (
        <div>
            <p>Width: { dimensions.width }</p>
            <p>Height: { dimensions.height }</p>
        </div>
    )
}
