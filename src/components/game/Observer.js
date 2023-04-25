
let knightPosition = [0, 0]
let observers = []

function emitChange() {
  observers.forEach(observer => observer(knightPosition))
}

export function observe(o) {
  observers.push(o)
  emitChange()
}

export function moveKnight(toX, toY) {
  knightPosition = [toX, toY]
  emitChange()
}