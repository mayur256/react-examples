// Top level imports
import { ReactElement } from "react";

// Pages
import Home from "../Home";
import News from "../News";
import Contact from "../Contact";

// CSS Module
import "./Layout.module.css"
// Atoms / Molecules / Organnisms
import Navbar from "../../components/organisms/Navbar";

// Component definition
export default function LayoutContainer(): ReactElement {
    return (
        <>
            <Navbar />
            <Home />
            <News />
            <Contact />
        </>
    )
};
