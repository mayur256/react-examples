// Top level imports
import { ReactElement, DragEvent } from "react";

// Prop type definitions
interface IProps {
    onDragStart: (event: DragEvent<HTMLSpanElement>) => void;
    onDrag?: (event: DragEvent<HTMLSpanElement>) => void;
    onDragEnd?: (event: DragEvent<HTMLSpanElement>) => void;
}

// Component definition
export default function Piece({
    onDragStart,
    onDrag,
    onDragEnd
}: IProps): ReactElement {
    return (
        <span
            draggable={true}
            onDragStart={onDragStart}
            onDrag={onDrag}
            onDragEnd={onDragEnd}
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
