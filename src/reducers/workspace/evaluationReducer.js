import {
  BRICK,
  MAIN_BRICK,
  PRIMITIVE,
  SELECTABLE_PIPE
} from '../../utils/componentNames'

import {
  elementInputValueIds,
  evalBrick
} from '../../utils/evalUtils'

export const evaluateAllWorkspaces = (workspace, elementId) => {
  const brick = workspace.entities[elementId]
  const valueIds = elementInputValueIds(brick)

  const outputSlotId = Object.keys(brick.outputSlots)[0]
  const outputSlot = brick.outputSlots[outputSlotId]

  const newUnitTests = workspace.unitTests.map((unitTest) => {
    const brickOutput = evalBrick(brick, valueIds, unitTest)

    return Object.assign({}, unitTest, {
      values: {
        ...unitTest.values,
        [outputSlotId]: {
          componentName: BRICK,
          type: typeof brickOutput,
          value: brickOutput.toString()
        }
      }
    })
  })

  return Object.assign({}, workspace, {
    ...workspace,
    unitTests: newUnitTests
  })
}
