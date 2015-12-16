const colorsForTypes = {
  boolean: "#A359E9",
  list: "#E9E759",
  null: "#D8D8D8",
  number: "#59E974",
  string: "#E9A559"
  // "#E96859"
}
const font = '15px monospace'
const slotWidth = 15

const Brick = {
  defaultPosition: {
    x: 50,
    y: 50
  },
  defaultSize: {
    height: 40,
    width: 100
  },
  fillColor: '#ADD8E6',
  font: font,
  slotOffset: 20,
  strokeColor: '#ADD8E6',
  textColor: 'black'
}
Brick.slotAndOffset = slotWidth + Brick.slotOffset

const MainBrick = {
  defaultPosition: {
    x: 50,
    y: 50
  },
  defaultSize: {
    height: 400,
    width: 350
  },
  fillColor: '#789',
  hoverFillColor: '#385661',
  slotOffset: 100,
  strokeColor: 'black'
}
MainBrick.slotAndOffset = slotWidth + MainBrick.slotOffset

const Pipe = {
  fillColor: colorsForTypes,
  font: font,
  strokeColor: 'black',
  textColor: 'black'
}

const Primitive = {
  defaultPosition: {
    x: 50,
    y: 50
  },
  fillColor: colorsForTypes,
  font: font,
  fontAlignment: 'middle',
  radius: 30,
  textColor: 'black'
}

const Slot = {
  cursor: 'pointer',
  height: 15,
  width: slotWidth,
  selectedFillColor: '#00FA9A'
}

const Surface = {
  width: 500
}

export default {
  Brick,
  MainBrick,
  Pipe,
  Primitive,
  Slot,
  Surface
}
