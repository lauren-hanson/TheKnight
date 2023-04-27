import React from 'react'
import Square from '../square/Square'
import { canMoveKnight, moveKnight } from '../game/Observer'
import { ItemTypes } from '../constants/Constants'
import { useDrop } from 'react-dnd'
import "./Board.css"

function BoardSquare({ x, y, children }) {

    const black = (x + y) % 2 === 1
    const [{ isOver, canDrop }, drop] = useDrop(
        () => ({
            accept: ItemTypes.KNIGHT,
            drop: () => moveKnight(x, y),
            collect: monitor => ({
                isOver: !!monitor.isOver(),
                canDrop: !!monitor.canDrop()
            }),
        }), [x, y])


    return (
        <div
            ref={drop}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
            }}
        >
            <Square black={black}>{children}</Square>
            {isOver && !canDrop && <div className="overlay" style={{ backgroundColor: 'red' }} />}
            {!isOver && canDrop && <div className="overlay" style={{ backgroundColor: 'yellow' }}/>}
            {isOver && canDrop && <div className="overlay" style={{ backgroundColor: 'yellow' }} />}
            {/* <Square black={black}>{children}</Square>
            {isOver && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        zIndex: 1,
                        opacity: 0.5,
                        backgroundColor: 'yellow',
                    }}
                />
            )} */}
        </div>
    )
}

export default BoardSquare