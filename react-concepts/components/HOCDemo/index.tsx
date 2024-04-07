// top level imports
import { FC, ReactElement } from "react";

/**
 * This is an HOC that adds greeting functionality to any component that is passed
 * as a prop to it.
 */
function withGreeting(Component: FC): FC {
    return function() {
        return (
            <h1>Welcome, <Component /></h1>
        )
    }
};

// Represents a guest user
function Guest(): ReactElement {
    return (
        <span>Guest</span>
    )
}

// Represents an authorized user
function John(): ReactElement {
    return (
        <span>John</span>
    )
};

const GreeTingGuest = withGreeting(Guest);

// Main component definition
export function HOCDemo(): ReactElement {
    return <GreeTingGuest />
};
