// Top level imports
import { ComponentPropsWithRef, ReactElement, ReactNode } from "react";

// External CSS
import classes from "./accordion.module.css";

// Component definition
export default function Accordion({
    title,
    children,
    ...rest }: { title: string, children: ReactNode } & ComponentPropsWithRef<"details">
): ReactElement {
    return (
        <details {...rest} className={classes['details']}>
            <summary className={classes['summary']}>{title}</summary>
            {children}
        </details>
    )
}
