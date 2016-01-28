import { connect } from 'react-redux'

import {
  addUnitTest,
  changeTestInputType,
  changePrimitiveValue,
  removeElement
} from '../actions'
import SelectedElementDialog from '../components/SelectedElementDialog'

const mapStateToProps = (state, ownProps) => {
  const { entities } = state.workspace
  const { id } = ownProps
  const { primitives } = state.library.items

  return {
    ...entities[id],
    primitives
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUnitTest: () => {
      dispatch(
        addUnitTest()
      )
    },
    deleteElement: (elementId) => {
      dispatch(
        removeElement(elementId)
      )
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedElementDialog)
