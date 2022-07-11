// Top level imports
import { ReactElement } from "react";

// Component definition
export default function Piece(): ReactElement {
    return (
        <span
            style={{
                display: 'inline-block',
                fontSize: '5rem',
                cursor: 'all-scroll'
            }}
        >
            &#9812;
        </span>
    )
};
