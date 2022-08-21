// Top level imports
import { ReactElement, CSSProperties, DragEvent } from "react";
// Custom components
import Cell from "../Cell";
import Piece from "../Piece";
import Square from "../Square";

// External Modules
import { dragImage } from "../../dragImage";

// Component definition
export default function Board(): ReactElement {

    /** Styling properties applied to the board element */
    const boardStyle: CSSProperties = {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
    }
    /** Styling properties applied to each square element */
    const cellStyle: CSSProperties = { width: '12.5%', height: '12.5%' }

    function isEven(idx: number): boolean {
        return idx % 2 === 0;
    }

    function renderSquare(x: number, y: number, isBlack: boolean): ReactElement {
        return (
            <Cell
                key={`${x}${y}`}
                style={cellStyle}
            >
                <Square
                    black={isBlack}
                >
                    {(x === 7 && y === 0)
                        ? (<Piece
                            onDragStart={onPieceDragStart}
                            onDrag={onPieceDrag}
                            onDragEnd={onPieceDragEnd}
                        />)
                        : null}
                </Square>
           </Cell>
        )
    }

    // board square rendering logic
    const BoardSquares = []; 
    const max = 8;
    for (let row = 0; row < max; row++) {
        let isEvenRow = isEven(row);
        let color = '';
        for (let col = 0; col < max; col++) {
            if (isEven(col)) {
                color = isEvenRow ? 'white' : 'black';
            } else {
                color = isEvenRow ? 'black' : 'white';
            }

            BoardSquares.push(renderSquare(row, col, color === 'black'));
        }
    }

    /* Handler functions - starts*/

    // drag start event handler
    function onPieceDragStart(event: DragEvent<HTMLSpanElement>) {
        // set drag effect
        event.dataTransfer.effectAllowed = 'move';

        // set drag image
        const imgEl = new Image();
        imgEl.src = dragImage;

        event.dataTransfer.setDragImage(imgEl, 10, 10);
    }

    // drag event handler
    function onPieceDrag(event: DragEvent<HTMLSpanElement>) {
    }

    // drag-end event handler
    function onPieceDragEnd(event: DragEvent<HTMLSpanElement>) {
        // 
    }

    /* Handler functions - ends */
    
    // Main JSX
    return (
        <div
            style={boardStyle}
        >
            {BoardSquares}
        </div>
    );
};
