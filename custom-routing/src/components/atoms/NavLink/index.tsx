// Top level imports
import { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";

// Prop type definition
interface IProps extends ComponentPropsWithoutRef<'a'> {
    to: string;
    children: ReactNode;
}
// Component definition
const NavLink = ({ to, children, ...rest }: IProps): ReactElement => {
    return (
        <a href={`/#/${to}`} {...rest}>{children}</a>
    )
};

export default NavLink;
