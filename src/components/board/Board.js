import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Square from '../square/Square'
import Knight from '../knight/Knight'
import { moveKnight, canMoveKnight } from '../game/Observer'

function renderSquare(i, [knightX, knightY]) {
    const x = i % 8
    const y = Math.floor(i / 8)
    const isKnightHere = x === knightX && y === knightY
    const black = (x + y) % 2 === 1
    const piece = isKnightHere ? <Knight /> : null

    return (
        <div onClick={() => handleSquareClick(x, y)} key={i} style={{ width: '12.5%', height: '12.5%' }}>
            <Square black={black}>{piece}</Square>
        </div>
    )
}

function handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)) {
        moveKnight(toX, toY)
    }
}
export default function Board({ knightPosition }) {
    const squares = []
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition))
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div
                style={{
                    margin: "0 auto",
                    width: "100vmin",
                    height: "100vmin",
                    display: "flex",
                    flexWrap: "wrap",
                    fontSize: "10vmin",
                    border: "1px solid black",
                }}
            >
                {squares}
            </div>
        </DndProvider>
    )
}