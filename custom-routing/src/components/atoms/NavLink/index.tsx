// Top level imports
import { ReactElement, ReactNode } from "react";

// Prop type definition
interface IProps {
    to: string;
    children: ReactNode;
}
// Component definition
const NavLink = ({ to, children }: IProps): ReactElement => {
    return (
        <a href={to}>{children}</a>
    )
};

export default NavLink;
