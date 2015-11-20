const Slot = {
  height: 15,
  width: 15
}

const RootBrick = {
  cursor: 'pointer',
  fillColor: '#789',
  hoverFillColor: '#385661',
  initialOffset: 30,
  slotOffset: 30,
  strokeColor: 'black'
}
RootBrick.slotAndOffset = Slot.width + RootBrick.slotOffset

export default {
  RootBrick,
  Slot
}
