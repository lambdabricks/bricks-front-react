import {
  BRICK,
  MAIN_BRICK,
  PRIMITIVE,
  SELECTABLE_PIPE
} from '../../utils/componentNames'

import {
  elementInputValueIds,
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
