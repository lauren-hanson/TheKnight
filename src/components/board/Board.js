import React from 'react'
import Square from '../square/Square'
import Knight from '../knight/Knight'

function renderSquare(i, [knightX, knightY]) {
    const x = i % 8
    const y = Math.floor(i / 8)
    const isKnightHere = x === knightX && y === knightY
    const black = (x + y) % 2 === 1
    const piece = isKnightHere ? <Knight /> : null

    return (
        <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
            <Square black={black}>{piece}</Square>
        </div>
    )
}

export default function Board({ knightPosition }) {
    const squares = []
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition))
    }

    return (
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
    )
}