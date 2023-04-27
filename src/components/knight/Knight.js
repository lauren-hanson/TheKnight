
import React from 'react'
import { ItemTypes } from '../constants/Constants'
import { useDrag } from 'react-dnd'

function Knight() {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: monitor => ({
      isDragging: monitor.isDragging() 
      // && monitor.getItem().type === ItemTypes.KNIGHT
    }),
  }), [])

  return (
    <div
      ref={drag}
      connect={preview}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 50,
        fontWeight: 'bold',
        cursor: 'move'
      }}

    >
      ♘
    </div>
  )
}

export default Knight

