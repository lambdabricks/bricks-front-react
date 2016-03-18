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

const TestNodeDefaults = {
  size: {
    height: 30,
    width: 60
  }
}
const Defaults = {
  [BRICK]: {
    position: {
      x: 50,
      y: 50
    },
    size: {
      height: 40,
      width: 100
    }
  },
  [MAIN_BRICK]: {
    position: {
      x: 50,
      y: 80
    },
    size: {
      height: 400,
      width: 350
    }
  },
  [PRIMITIVE]: {
    position: {
      x: 50,
      y: 50
    },
    size: {
      height: 30,
      width: 60
    }
  },
  [TEST_INPUT]: {
    size: TestNodeDefaults.size
  },
  [TEST_OUTPUT]: {
    size: TestNodeDefaults.size
  }
}

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
    position: Defaults[BRICK].position,
    size: Defaults[BRICK].size
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
    position: Defaults[MAIN_BRICK].position,
    size: Defaults[MAIN_BRICK].size,
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
    position: Defaults[PRIMITIVE].position,
    size: Defaults[PRIMITIVE].size,
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
      size: Defaults[componentName].size,
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
