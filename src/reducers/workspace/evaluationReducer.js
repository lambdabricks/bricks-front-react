import {
  BRICK,
  MAIN_BRICK,
  PRIMITIVE,
  SELECTABLE_PIPE
} from '../../utils/componentNames'

import {
  elementInputValueIds,
  evalPathValueIds,
  tryEvalPath
} from '../../utils/evalUtils'

export const evaluateAllWorkspaces = (workspace, elementId) => {
  const newUnitTests = workspace.unitTests.map((unitTest) => {
    return tryEvalPath(workspace, unitTest, elementId)
  })

  return Object.assign({}, workspace, {
    ...workspace,
    unitTests: newUnitTests
  })
}

export const unevaluate = (workspace, outputSlots) => {
  const valueIds = evalPathValueIds(workspace, outputSlots, [])

  const newUnitTests = workspace.unitTests.map((unitTest) => {
    let newUnitTest = { values: {} }

    for(let id in unitTest.values) {
      if(valueIds.indexOf(parseInt(id)) == -1) {
        newUnitTest.values[id] = unitTest.values[id]
      }
    }

    return newUnitTest
  })

  return Object.assign({}, workspace, {
    unitTests: newUnitTests
  })
}
