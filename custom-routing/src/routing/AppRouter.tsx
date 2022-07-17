// Top level imports
import { createContext, ReactElement, ReactNode, useEffect, useState } from "react";
import { useLocation } from "../hooks/useLocation";

// Props type definitions
interface IProps {
    children: ReactNode;
}

// navigation context type definition
interface INavCtx {
    pathName: string;
    search?: string;
    hash?: string;
}

// React context - used to handle navigation state that will be shared by components
export const AppNavCtx = createContext<INavCtx | null>(null);

// Component definition
export default function AppRouter({ children }: IProps): ReactElement {
    // state declaration
    const [currentLocation] = useState<INavCtx | null>(null);
    console.log(useLocation());

    useEffect(() => {
        const onHashChange = (event: HashChangeEvent): void => {
        };

        window.addEventListener('hashchange', onHashChange);
    }, [])

    return (
        <AppNavCtx.Provider value={currentLocation}>
            {children}
        </AppNavCtx.Provider>
    );
};
