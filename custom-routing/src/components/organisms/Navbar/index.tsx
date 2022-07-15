// Top level imports
import { ReactElement } from "react";

// Atoms / Molecules / Organisms
import NavLink from "../../atoms/NavLink";

// CSS modules
import "./navbar.module.css";

// Component definition
const Navbar = (): ReactElement => {
    return (
        <nav>
            <NavLink to="home">Home</NavLink>
            <NavLink to="home">News</NavLink>
            <NavLink to="home">Contact</NavLink>
        </nav>
    )
};

export default Navbar;
