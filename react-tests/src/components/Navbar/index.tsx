// Top level imports
import { ReactElement } from "react";
// react-router
import { Link } from "react-router-dom";

// External CSS
import "./index.scss";

// Component definition
export default function Navbar(): ReactElement {
    return (
        <nav data-testid="navbar">
            <Link to="/app" data-testid="navlinks">Home</Link>
            <Link to="contact" data-testid="navlinks">Contact</Link>
        </nav>
    );
};
