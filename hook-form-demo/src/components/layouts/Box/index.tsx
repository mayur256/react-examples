// Top level imports
import { ComponentPropsWithRef, ReactElement, ReactNode } from "react";

// CSS module
import classes from "./flexbox.module.css";

type Display = 'block' | 'inline' | 'inline-block' | 'flex' | 'inline-flex' | 'contents' | 'table';
type justifyContentT = 'flex-start' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'flex-end';
// Props type definitions
interface IProps extends ComponentPropsWithRef<"div"> {
    children: ReactNode;
    display?: Display;
    justifyContent?: justifyContentT;
    noPadding?: boolean;
    noMargin?: boolean;
    error?: boolean;
}

// Component definition
export default function Box({
    children,
    display = 'block',
    justifyContent = "flex-start",
    noPadding = false,
    noMargin = false,
    error = false,
    ...rest
}: IProps): ReactElement {
    const flexJustifyContents: { [key: string]: () => string } = {
        'center': () => classes['justify-content-center'],
        'space-between': () => classes['justify-content-space-between'],
        'space-around': () => classes['justify-content-space-around'],
        'space-evenly': () => classes['justify-content-space-evenly'],
        'flex-end': () => classes['justify-content-flex-end'],
        'flex-start': () => classes['justify-content-flex-start'],
    };
    const justifyClass = flexJustifyContents[justifyContent]?.();
    
    return (
        <div className=
            {`${display === 'flex' ? classes['display-flex'] : ''} ${justifyClass ?? 'flex-start'} ${noPadding ? 'no-padding' : ''} ${noMargin ? 'no-margin' : ''} ${error ? 'text-danger' : ''}`}
            {...rest}
        >
            {children}
        </div>
    )
};
