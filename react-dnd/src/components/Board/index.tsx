// Top level imports
import { useState, useEffect, ReactElement, CSSProperties, DragEvent } from "react";
// Custom components
import Cell from "../Cell";
import Piece from "../Piece";
import Square from "../Square";

// External Modules
import { dragImage } from "../../dragImage";

type IPiecePos = {
    x: number,
    y: number
}
// Component definition
export default function Board(): ReactElement {
    // state declarations
    const [piecePos, setPiecePos] = useState<IPiecePos>({
        x: 0,
        y: 0
    });
    const [imgEl, setImgEl] = useState<Element | null>(null);

    // Component did mount
    useEffect(() => {
        const imgEl = new Image();
        imgEl.src = dragImage;
        setImgEl(imgEl);
    },[]);

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
                data-cell-x={x}
                data-cell-y={y}
                style={cellStyle}
                onDragEnter={onCellDragEnter}
                onDrop={onCellDrop}
                onDragOver={onCellDragOver}
            >
                <Square
                    black={isBlack}
                >
                    {(x === piecePos.x && y === piecePos.y)
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
        if (imgEl) {
            event.dataTransfer.setDragImage(imgEl, 50, 50);
        }
    }

    // drag event handler
    function onPieceDrag(event: DragEvent<HTMLSpanElement>) {
    }

    // drag-end event handler
    function onPieceDragEnd(event: DragEvent<HTMLSpanElement>) {
        // 
    }  

    // dragEnter event handler
    // this event is fired when a dragged item enters a valid drop target
    function onCellDragEnter(event: DragEvent<HTMLSpanElement>) {
        // 
    }

    // drag over event handler
    function onCellDragOver(event: DragEvent<HTMLSpanElement>) {
        // set the drop effect type - in most cases it should be compatible to dragEffect
        event.dataTransfer.dropEffect = "move";
        event.preventDefault();
    }

    // onDrop event handler
    function onCellDrop(event: DragEvent<HTMLSpanElement>) {
        const { cellX = 0, cellY = 0 } = event.currentTarget.dataset;
        setPiecePos({
            x: +cellX,
            y: +cellY
        });
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
