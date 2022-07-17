// Top level imports
import { useEffect, useState } from "react";

// Type def for Custom Location object schema
interface ILOC{
    pathName: string;
    search?: string;
    hash?: string;
}

// Hook definition
export const useLocation = () => {
    // state declaration
    const [locationState, setLocationState] = useState<ILOC | null>(null);

    // gets location info and transforms it
    function getLocationInfo(): ILOC {
        const location: Location = window.location;
        const { search, hash } = location;
        const domain = !location.hash ? location.origin : location.origin + '/#';
        const pathName = location.href.replace(domain, '');

        return { pathName, search, hash };
    }

    // Calculates location object and sets it to state
    function setCalcLocationToState() {
        const { pathName, search, hash } = getLocationInfo();
        setLocationState({ pathName, search, hash });
    }

    // On DidMount
    useEffect(() => {
        setCalcLocationToState();

        // HashChangeEvent event handler
        const onHashChange = (): void => {
            setCalcLocationToState();
        };

        // register event
        window.addEventListener('hashchange', onHashChange);

        // cleanup function
        return () => {
            window.removeEventListener('hashchange', onHashChange);
        }
    }, []);

    return locationState;
};
