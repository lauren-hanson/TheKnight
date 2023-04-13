import React, { useState, useEffect } from "react";
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
            <Board knightPosition={knightPosition} black={black} />
        </>
    );
}

export default TheKnight;
