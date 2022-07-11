// Top level imports
import { ComponentPropsWithoutRef, ReactElement, ReactNode } from "react";

// Props type definition
interface IProps extends ComponentPropsWithoutRef<"div"> {
    black: boolean;
    children?: ReactNode
}

// Component definition
export default function Square({
    black = false,
    children
}: IProps): ReactElement {
    const backgroundColor = black ? 'black' : 'white';
    const color = !black ? 'black' : 'white';
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                backgroundColor,
                color
            }}
        >
            {children}
        </div>
    );
}
