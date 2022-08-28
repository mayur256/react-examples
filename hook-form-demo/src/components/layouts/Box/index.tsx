// Top level imports
import { ComponentPropsWithRef, ReactElement, ReactNode } from "react";

// CSS module
import classes from "./flexbox.module.css";

type Display = 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'contents' | 'table';
type justifyContentT = 'center' | 'space-between' | 'space-around' | 'space-evenly';
// Props type definitions
interface IProps extends ComponentPropsWithRef<"div"> {
    children: ReactNode;
    display?: Display;
    justifyContent?: justifyContentT;
}

// Component definition
export default function Box({
    children,
    display = 'block',
    justifyContent = "center"
}: IProps): ReactElement {
    const flexJustifyContents: { [key: string]: () => string } = {
        'center': () => classes['justify-content-center'],
        'space-between': () => classes['justify-content-space-between'],
        'space-around': () => classes['justify-content-space-around'],
        'space-evenly': () => classes['justify-content-space-evenly'],
    };
    const justifyClass = flexJustifyContents[justifyContent]?.();
    
    return (
        <div className={`
            ${display === 'flex' ? classes['display-flex'] : display}
            ${justifyClass}
        `}>
            {children}
        </div>
    )
};
