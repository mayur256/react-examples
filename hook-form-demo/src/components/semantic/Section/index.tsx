// Top level imports
import { ComponentPropsWithRef, ReactElement, ReactNode } from "react";

// Component definition
export default function Main({ children, ...rest }: { children: ReactNode } & ComponentPropsWithRef<"section">): ReactElement {
    return (
        <section {...rest}>
            {children}
        </section>
    )
}
