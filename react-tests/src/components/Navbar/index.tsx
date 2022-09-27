// Top level imports
import { ReactElement } from "react";
// react-router
import { Link } from "react-router-dom";

// External CSS
import "./index.scss";

// Component definition
export default function Navbar(): ReactElement {
    return (
        <nav>
            <Link to="/app">Home</Link>
            <Link to="contact">Contact</Link>
        </nav>
    );
};
