// top level imports
import { ReactElement } from "react";

// React Router
import { Outlet } from "react-router-dom";

// Components
import Navbar from "../../components/Navbar";

// Component definition
export default function AppContainer(): ReactElement {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};
