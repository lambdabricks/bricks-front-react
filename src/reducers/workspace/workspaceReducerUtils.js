import {
  Brick as BrickDefaults,
  MainBrick as MainBrickConstants,
  Primitive as PrimitiveDefaults,
  TestInput as TestInputConstants
} from '../../components/constants'

import { inputSlotPosition } from '../../utils'
import {
  BRICK,
  MAIN_BRICK,
  PRIMITIVE,
  SELECTABLE_PIPE,
  TEST_INPUT
} from '../../utils/componentNames'

let id = 1
// TODO: Generate id's with an UID function ??
const nextId = () => id++

export const newBrick = (brick) => {
  const { arity, moduleName, name } = brick
  let inputSlots = {}
  const outputSlotId = nextId()

  for(var i=0; i < arity; i++) {
    const id = nextId()

    inputSlots[id] = {
      id,
      index: i
    }
  }

  return {
    componentName: BRICK,
    id: nextId(),
    inputSlots,
    moduleName,
    name,
    outputSlots: {
      [outputSlotId]: {
        id: outputSlotId,
        index: 0,
        outputElementIds: [],
        valueId: outputSlotId
      }
    },
    position: BrickDefaults.defaultPosition,
    size: BrickDefaults.defaultSize
  }
}

const newMainBrick = (mainBrickId) => {
  const inputSlotIds = [nextId(), nextId()]
  const outputSlotId = nextId()

  return {
    componentName: MAIN_BRICK,
    id: mainBrickId,
    innerIds: [],
    inputSlots: {
      [inputSlotIds[0]]: {
        id: inputSlotIds[0],
        index: 0
      },
      [inputSlotIds[1]]: {
        id: inputSlotIds[1],
        index: 1
      }
    },
    outputSlots: {
      [outputSlotId]: {
        id: outputSlotId,
        index: 0
      }
    },
    position: MainBrickConstants.defaultPosition,
    size: MainBrickConstants.defaultSize
  }
}

export const newPrimitive = (type) => {
  const elementId = nextId()

  return {
    componentName: PRIMITIVE,
    id: elementId,
    outputSlots: {
      [elementId]: {
        id: elementId,
        index: 0,
        outputElementIds: [],
        valueId: elementId
      }
    },
    position: PrimitiveDefaults.defaultPosition,
    size: PrimitiveDefaults.defaultSize,
    // react or redux ignore pair with value `undefined`
    value: null
  }
}

export const newPipe = (payload) => {
  const { input, output } = payload

  return {
    componentName: SELECTABLE_PIPE,
    id: nextId(),
    input,
    output,
    type: "null",
    valueId: input.slotId
  }
}

export const newTestInputs = (mainBrick) => {
  let testInputs = {}

  for(var id in mainBrick.inputSlots) {
    const inputSlot = mainBrick.inputSlots[id]

    testInputs[id] = {
      componentName: TEST_INPUT,
      id: inputSlot.id,
      outputSlots: {
        [inputSlot.id]: {
          id: inputSlot.id,
          index: 0,
          outputElementIds: []
        }
      },
      slotPosition: inputSlotPosition(mainBrick, inputSlot.id),
      size: TestInputConstants.defaultSize,
      type: "null",
      value: null
    }
  }

  return testInputs
}

export const newWorkspace = () => {
  const mainBrickId = nextId()
  const mainBrick = newMainBrick(mainBrickId)
  const testInputs = newTestInputs(mainBrick)

  let testInputIds = []

  for(var testInput in testInputs)
    testInputIds.push(testInputs[testInput].id)

  return {
    entities: {
      [mainBrickId]: {
        ...mainBrick,
        testInputIds
      },
      ...testInputs
    },
    mainBrickId: mainBrickId,
    selectionState: {
      dragStarted: false,
      element: { },
      pipe: {
        input: { },
        output: { }
      }
    },
    unitTests: [
      {
        values: { }
      }
    ]
  }
}

export const pipeConnectedToElement = (element, elementId) => {
  return element.componentName == SELECTABLE_PIPE &&
    (element.input.elementId == elementId ||
     element.output.elementId == elementId)
}
