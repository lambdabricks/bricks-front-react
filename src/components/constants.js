import {
  BRICK,
  MAIN_BRICK,
  PRIMITIVE,
  SELECTABLE_PIPE,
  SURFACE,
  TEST_INPUT,
  TEST_OUTPUT
} from '../utils/componentNames'

import { ERROR } from '../utils/evalUtils'

const colors = {
  boolean: "#8A2BE2",
  [ERROR]: '#D80000',
  false: "#E44B37",
  list: "#E9E759",
  null: "#BFBFBF",
  number: "#E96859",
  string: "#E9A559",
  true: "#358DE2",
  undefined: "#BFBFBF"
}

const testColors = {
  failing: '#d87777',
  passing: '#77d877',
  pending: '#d8d8d8'
}

const font = '15px monospace'
const slotWidth = 15

const Slot = {
  cursor: 'pointer',
  height: 15,
  width: slotWidth,
  selectedFillColor: '#00FA9A'
}

const TestNode = {
  font,
  slotHeight: Slot.height,
  slotWidth: Slot.width,
  textColor: 'black',
  yOffset: 60
}

const LEFT = 0

const brickSlotOffset = 20
const mainBrickSlotOffset = 100

const Constants = {
  [BRICK]: {
    fillColor: '#ADD8E6',
    font: font,
    slotAndOffset: brickSlotOffset + slotWidth,
    slotHeight: Slot.height,
    slotOffset: brickSlotOffset,
    slotWidth: Slot.width,
    strokeColor: 'black',
    textColor: 'black',
    textErrorColor: colors[ERROR]
  },
  [MAIN_BRICK]: {
    fillColor: '#789',
    hoverFillColor: '#385661',
    slotAndOffset: mainBrickSlotOffset + slotWidth,
    slotHeight: Slot.height,
    slotOffset: mainBrickSlotOffset,
    slotWidth: Slot.width,
    strokeColor: 'black'
  },
  [PRIMITIVE]: {
    font: font,
    fontAlignment: 'middle',
    slotWidth: Slot.width,
    textColor: 'black'
  },
  [SELECTABLE_PIPE]: {
    font: font,
    strokeColor: 'black',
    textColor: 'black'
  },
  [SURFACE]: {
    width: 450
  },
  [TEST_INPUT]: TestNode,
  [TEST_OUTPUT]: TestNode
}

const getConstant = (componentName, key) => {
  return Constants[componentName][key]
}

export default {
  colors,
  getConstant,
  LEFT,
  Slot,
  testColors
}
