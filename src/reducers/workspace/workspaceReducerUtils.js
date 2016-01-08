import {
  TestInput as TestInputConstants
} from '../../components/constants'

import { inputSlotPosition } from '../../utils'

let id = 1
// TODO: Generate id's with an UID function ??
export const nextId = () => id++

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
