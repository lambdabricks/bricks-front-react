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
  fillColor: {
    boolean: "#A359E9",
    list: "#E9E759",
    number: "#59E974",
    string: "#E9A559"
    // "#E96859"
  },
  font: '15px monospace',
  fontAlignment: 'middle',
  radius: 30,
  textColor: 'black'
}

export default {
  Primitive,
  RootBrick,
  Slot
}
