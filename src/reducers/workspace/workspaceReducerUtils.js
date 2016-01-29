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
export const nextId = () => id++

export const newBrick = (brick) => {
  const { arity, moduleName, name } = brick
  let inputSlots = []

  for(var i=0; i < arity; i++)
    inputSlots.push({ id: nextId() })

  return {
    componentName: BRICK,
    id: nextId(),
    inputSlots,
    moduleName,
    name,
    outputSlots: [
      { id: nextId() }
    ],
    position: BrickDefaults.defaultPosition,
    size: BrickDefaults.defaultSize
  }
}

const newMainBrick = (mainBrickId) => {
  return {
    componentName: MAIN_BRICK,
    id: mainBrickId,
    innerIds: [],
    inputSlots:[
      { id: nextId() },
      { id: nextId() }
    ],
    outputSlots: [
      { id: nextId() }
    ],
    position: MainBrickConstants.defaultPosition,
    size: MainBrickConstants.defaultSize
  }
}

export const newPrimitive = (type) => {
  return {
    componentName: PRIMITIVE,
    id: nextId(),
    position: PrimitiveDefaults.defaultPosition,
    size: PrimitiveDefaults.defaultSize,
    type: type,
    // react or redux ignore pair with value `undefined`
    value: null
  }
}

export const newPipe = (workspace, elementId) => {
  const { input, output } = workspace.selectionState.pipe

  return {
    componentName: SELECTABLE_PIPE,
    id: elementId,
    input,
    output,
    type: "null"
  }
}

export const newTestInputs = (mainBrick) => {
  let testInputs = {}

  mainBrick.inputSlots.forEach((inputSlot, index) => {
    testInputs[inputSlot.id] = {
      componentName: TEST_INPUT,
      id: inputSlot.id,
      slotPosition: inputSlotPosition(mainBrick, inputSlot.id),
      size: TestInputConstants.defaultSize,
      type: "null",
      value: null
    }
  })

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
