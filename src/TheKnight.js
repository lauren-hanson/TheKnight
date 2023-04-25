import React, { useState, useEffect } from "react";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Board from "./components/board/Board"
import { observe } from "./components/game/Observer"

function TheKnight({ black }) {

    const [knightPosition, setKnightPosition] = useState([1, 7])

    useEffect(() => {
        observe(
            newPosition => setKnightPosition(newPosition)
        )
    })

    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <Board knightPosition={knightPosition} black={black} />
            </DndProvider>
        </>
    );
}

export default TheKnight;
