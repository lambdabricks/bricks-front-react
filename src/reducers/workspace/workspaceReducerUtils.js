import {
  MainBrick as MainBrickConstants,
  TestInput as TestInputConstants
} from '../../components/constants'

import { inputSlotPosition } from '../../utils'
import {
  MAIN_BRICK
} from '../../utils/componentNames'

let id = 1
// TODO: Generate id's with an UID function ??
export const nextId = () => id++

export const newWorkspace = () => {
  const mainBrickId = nextId()
  const mainBrick = newMainBrick(mainBrickId)
  const testInputs = newUnitTest(mainBrick)

  return {
    entities: {
      [mainBrickId]: mainBrick,
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
      Object.keys(testInputs)
    ]
  }
}

const newMainBrick = (mainBrickId) => {
  return {
    componentName: MAIN_BRICK,
    id: mainBrickId,
    inner: [],
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

export const newUnitTest = (mainBrick) => {
  let testInputs = {}

  mainBrick.inputSlots.forEach((inputSlot, index) => {
    const testInputId = nextId()

    testInputs[testInputId] = {
      id: testInputId,
      slotPosition: inputSlotPosition(mainBrick, inputSlot.id),
      size: TestInputConstants.defaultSize,
      type: null,
      value: null
    }
  })

  return testInputs
}
