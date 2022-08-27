// Top level imports
import { ComponentPropsWithRef, ReactElement, ReactNode } from "react";

// CSS module
import classes from "./grid.module.css";

// Props type definitions
interface IProps extends ComponentPropsWithRef<"div"> {
    children: ReactNode
}

// Component definition
export default function Grid({ children }: IProps): ReactElement {
    return (
        <div className={classes['display-grid']}>
            {children}
        </div>
    )
};
