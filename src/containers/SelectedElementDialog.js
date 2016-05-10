import { connect } from 'react-redux'

import {
  addUnitTest,
  changePrimitiveValue,
  changeTestNodeType,
  changeTestNodeValue,
  removeElement,
  removeSelectedElement,
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
    changeTestNodeType: (elementId, changeEvent, workspaceIndex) => {
      dispatch(
        changeTestNodeType(elementId, changeEvent.target.value, workspaceIndex)
      )
    },
    changeTestNodeValue: (elementId, changeEvent, workspaceIndex) => {
      dispatch(
        changeTestNodeValue(elementId, changeEvent.target.value, workspaceIndex)
      )
    },
    closeDialog: () => {
      dispatch(removeSelectedElement())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedElementDialog)
