const Slot = {
  cursor: 'pointer',
  height: 15,
  width: 15
}

const RootBrick = {
  fillColor: '#789',
  hoverFillColor: '#385661',
  initialOffset: 30,
  slotOffset: 100,
  strokeColor: 'black'
}
RootBrick.slotAndOffset = Slot.width + RootBrick.slotOffset

const Primitive = {
  fillColor: '#A359E9',
  font: '15px monospace',
  fontAlignment: 'middle',
  radius: 30,
  strokeColor: '#A359E9',
  textColor: 'black'
}

export default {
  Primitive,
  RootBrick,
  Slot
}
