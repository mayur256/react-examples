// Top level imports
import { ReactElement } from "react";

// Atoms / Molecules / Organisms
import NavLink from "../../atoms/NavLink";

// CSS modules
import "./navbar.module.css";

// path links
const paths: Array<string> = ['home', 'news', 'contact'];

// Props type definitions
interface IProps {
    currentPath: string;
}
// Component definition
const Navbar = ({ currentPath }: IProps): ReactElement => {
    return (
        <nav>
            {paths.map((link) => (
                <NavLink
                    key={link}
                    to={link}
                    style={{ background: currentPath === link ? '#4194f6' : '' }}
                >
                    {link}
                </NavLink>
            ))}
        </nav>
    )
};

export default Navbar;
