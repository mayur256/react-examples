// Top level imports
import { ReactNode, ReactElement, ComponentPropsWithoutRef } from "react";

// Props type definitions
interface IProps extends ComponentPropsWithoutRef<"div"> {
    children?: ReactNode
};

// Component definition
export default function Cell({
    children,
    ...rest
}: IProps): ReactElement {
    return (
        <div {...rest}>
            {children}
        </div>
    );
};
