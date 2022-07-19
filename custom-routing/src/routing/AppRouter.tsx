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
    const [currentLocation, setCurrentLocation] = useState<INavCtx | null>(null);

    // custom location hook
    const location = useLocation();

    useEffect(() => {
        setCurrentLocation(location);
    }, [location])

    return (
        <AppNavCtx.Provider value={currentLocation}>
            {children}
        </AppNavCtx.Provider>
    );
};
