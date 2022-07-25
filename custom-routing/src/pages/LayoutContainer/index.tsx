// Top level imports
import { ReactElement, useContext } from "react";

// App context
import { AppNavCtx } from "../../routing/AppRouter";

// Pages
import Home from "../Home";
import News from "../News";
import Contact from "../Contact";
import NotFound from "../NotFound";

// CSS Module
import styles from "./Layout.module.css";

// Atoms / Molecules / Organnisms
import Navbar from "../../components/organisms/Navbar";

// Component definition
export default function LayoutContainer(): ReactElement {
    // hooks
    const location = useContext(AppNavCtx);
    
    // compute current path
    const currentPath = location?.pathName?.slice(1) ?? '';

    // Path to component map
    const components: {[key: string]: () => ReactElement} = {
        'home': (): ReactElement => <Home />,
        'news': (): ReactElement => <News />,
        'contact': (): ReactElement => <Contact />
    };

    // Main JSX
    return (
        <>
            <Navbar currentPath={currentPath} />
            <div className={styles.main}>
                {components[currentPath]?.() ?? <NotFound />}
            </div>
        </>
    )
};
