const font = '15px monospace'
const slotWidth = 15

const Brick = {
  fillColor: '#ADD8E6',
  font: font,
  slotOffset: 20,
  strokeColor: '#ADD8E6',
  textColor: 'black'
}
Brick.slotAndOffset = slotWidth + Brick.slotOffset

const Primitive = {
  fillColor: {
    boolean: "#A359E9",
    list: "#E9E759",
    number: "#59E974",
    string: "#E9A559"
    // "#E96859"
  },
  font: font,
  fontAlignment: 'middle',
  radius: 30,
  textColor: 'black'
}

const RootBrick = {
  fillColor: '#789',
  hoverFillColor: '#385661',
  slotOffset: 100,
  strokeColor: 'black'
}
RootBrick.slotAndOffset = slotWidth + RootBrick.slotOffset

const Slot = {
  cursor: 'pointer',
  height: 15,
  width: slotWidth
}

export default {
  Brick,
  Primitive,
  RootBrick,
  Slot
}
