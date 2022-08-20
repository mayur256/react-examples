// Top level imports
import { ReactElement, DragEvent } from "react";

// Prop type definitions
interface IProps {
    onDragStart: (event: DragEvent<HTMLSpanElement>) => void;
}

// Component definition
export default function Piece({
    onDragStart
}: IProps): ReactElement {
    return (
        <span
            draggable={true}
            onDragStart={onDragStart}
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
