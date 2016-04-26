import {
  BRICK,
  MAIN_BRICK,
  PIPE,
  PRIMITIVE,
  SELECTABLE_PIPE,
  SLOT,
  SURFACE,
  TEST_INPUT,
  TEST_OUTPUT,
  TEST_RESULT
} from '../utils/componentNames'

import { ERROR } from '../utils/evalUtils'

export const colors = {
  boolean: "#8A2BE2",
  [ERROR]: '#D80000',
  false: "#E44B37",
  list: "#E96859",
  null: "#BFBFBF",
  number: "#E9E759",
  string: "#E9A559",
  true: "#358DE2",
  undefined: "#BFBFBF"
}

export const testColors = {
  failing: '#d87777',
  passing: '#77d877',
  pending: '#d8d8d8'
}

export const LEFT = 0

export const CLEAN = '1'
export const UNIT_TEST = '2'

const brickSlotOffset = 20
const font = '15px monospace'
const mainBrickSlotOffset = 100
const slotHeight = 15
const slotWidth = slotHeight

const TestNode = {
  font,
  slotHeight: slotHeight,
  slotWidth: slotWidth,
  textColor: 'black',
  yOffset: 60
}

const Constants = {
  [BRICK]: {
    fillColor: '#ADD8E6',
    font: font,
    outputFont: 'bold ' + font,
    slotAndOffset: brickSlotOffset + slotWidth,
    slotHeight: slotHeight,
    slotOffset: brickSlotOffset,
    slotWidth: slotWidth,
    strokeColor: 'black',
    textColor: 'black'
  },
  [MAIN_BRICK]: {
    fillColor: '#789',
    hoverFillColor: '#385661',
    margin: 20,
    slotAndOffset: mainBrickSlotOffset + slotWidth,
    slotHeight: slotHeight,
    slotOffset: mainBrickSlotOffset,
    slotWidth: slotWidth,
    strokeColor: 'black'
  },
  [PIPE]: {
    slotHeight: slotHeight,
    slotWidth: slotWidth
  },
  [PRIMITIVE]: {
    font: font,
    fontAlignment: 'middle',
    slotWidth: slotWidth,
    textColor: 'black'
  },
  [SELECTABLE_PIPE]: {
    font: font,
    strokeColor: 'black',
    textColor: 'black'
  },
  [SLOT]: {
    cursor: 'pointer',
    height: 15,
    width: slotWidth,
    fillColor: '#00FA9A'
  },
  [TEST_INPUT]: TestNode,
  [TEST_OUTPUT]: TestNode,
  [TEST_RESULT]: {
    slotHeight: slotHeight
  }
}

export const getConstant = (componentName, key) => {
  return Constants[componentName][key]
}
