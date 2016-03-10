import { connect } from 'react-redux'

import {
  addUnitTest,
  changePrimitiveValue,
  changeTestInputType,
  changeTestInputValue,
  removeElement,
  removeUnitTest
} from '../actions'
import SelectedElementDialog from '../components/SelectedElementDialog'

const mapStateToProps = (state, ownProps) => {
  const { entities, unitTests } = state.workspace
  const { id, workspaceIndex } = ownProps
  const { primitives } = state.library.items

  return {
    ...entities[id],
    ...unitTests[workspaceIndex || 0].values[id],
    primitives,
    totalUnitTests: unitTests.length
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUnitTest: () => {
      dispatch(addUnitTest())
    },
    deleteElement: (elementId) => {
      dispatch(removeElement(elementId))
    },
    deleteUnitTest: (workspaceIndex) => {
      dispatch(removeUnitTest(workspaceIndex))
    },
    changePrimitiveValue: (elementId, changeEvent, workspaceIndex) => {
      dispatch(
        changePrimitiveValue(elementId, changeEvent.target.value, workspaceIndex)
      )
    },
    changeTestInputType: (elementId, changeEvent, workspaceIndex) => {
      dispatch(
        changeTestInputType(elementId, changeEvent.target.value, workspaceIndex)
      )
    },
    changeTestInputValue: (elementId, changeEvent, workspaceIndex) => {
      dispatch(
        changeTestInputValue(elementId, changeEvent.target.value, workspaceIndex)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedElementDialog)
