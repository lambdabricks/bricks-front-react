import {
  Brick as BrickDefaults,
  MainBrick as MainBrickConstants,
  Primitive as PrimitiveDefaults,
  TestInput as TestInputConstants
} from '../../components/constants'

import {
  inputSlotPosition,
  outputSlotPosition
} from '../../utils'

import {
  BRICK,
  MAIN_BRICK,
  PRIMITIVE,
  SELECTABLE_PIPE,
  TEST_INPUT,
  TEST_OUTPUT
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
        value: {
          slotId: outputSlotId
        }
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
  let testInputs = _newTestNodes(
    mainBrick,
    TEST_INPUT,
    mainBrick.inputSlots,
    inputSlotPosition
  )

  for(var id in testInputs) {
    const testInput = testInputs[id]

    testInput.outputSlots = {
      [testInput.id]: {
        id: testInput.id,
        index: 0,
        outputElementIds: []
      }
    }
  }

  return testInputs
}

export const newTestOutputs = (mainBrick) => {
  return _newTestNodes(
    mainBrick,
    TEST_OUTPUT,
    mainBrick.outputSlots,
    outputSlotPosition
  )
}

const _newTestNodes = (mainBrick, componentName, slots, slotPosition) => {
  let testNodes = {}

  for(var id in slots) {
    const slot = slots[id]

    testNodes[id] = {
      componentName,
      id: slot.id,
      slotPosition: slotPosition(mainBrick, slot.id),
      size: TestInputConstants.defaultSize,
      type: "null",
      value: null
    }
  }

  return testNodes
}

export const newWorkspace = () => {
  const mainBrickId = nextId()
  const mainBrick = newMainBrick(mainBrickId)
  const testInputs = newTestInputs(mainBrick)
  const testOutputs = newTestOutputs(mainBrick)

  let testInputIds = []

  for(var testInput in testInputs) {
    testInputIds.push(testInputs[testInput].id)
  }

  let testOutputIds = []

  for(var testOutput in testOutputs) {
    testOutputIds.push(testOutputs[testOutput].id)
  }

  return {
    entities: {
      [mainBrickId]: {
        ...mainBrick,
        testInputIds,
        testOutputIds
      },
      ...testInputs,
      ...testOutputs
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
