
import React from 'react'
import { ItemTypes } from '../constants/Constants'
import { useDrag } from 'react-dnd'

function Knight() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div
      ref={drag}
    >
      ♘
    </div>
  )
}

export default Knight

