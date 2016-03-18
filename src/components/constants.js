import { ERROR } from '../utils/evalUtils'

const colors = {
  boolean: "#8A2BE2",
  [ERROR]: '#D80000',
  false: "#E44B37",
  list: "#E9E759",
  null: "#BFBFBF",
  number: "#E96859",
  string: "#E9A559",
  true: "#358DE2"
}

const testColors = {
  failing: '#d87777',
  passing: '#77d877',
  pending: '#d8d8d8'
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
  strokeColor: 'black',
  textColor: 'black',
  textErrorColor: colors[ERROR]
}
Brick.slotAndOffset = slotWidth + Brick.slotOffset

const MainBrick = {
  defaultPosition: {
    x: 50,
    y: 80
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
  font: font,
  strokeColor: 'black',
  textColor: 'black'
}

const Primitive = {
  defaultPosition: {
    x: 50,
    y: 50
  },
  defaultSize: {
    height: 30,
    width: 60
  },
  font: font,
  fontAlignment: 'middle',
  textColor: 'black'
}

const Slot = {
  cursor: 'pointer',
  height: 15,
  width: slotWidth,
  selectedFillColor: '#00FA9A'
}

const Surface = {
  width: 450
}

const TestNode = {
  defaultSize: {
    height: 30,
    width: 60
  },
  font,
  textColor: 'black',
  yOffset: 60
}

const TestInput = TestNode

const TestOutput = TestNode

const LEFT = 0

export default {
  Brick,
  colors,
  MainBrick,
  LEFT,
  Pipe,
  Primitive,
  Slot,
  Surface,
  testColors,
  TestInput,
  TestOutput
}
