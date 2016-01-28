import { connect } from 'react-redux'

import {
  addUnitTest,
  changePrimitiveType,
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
    changePrimitiveType: (elementId, changeEvent, workspaceIndex) => {
      dispatch(
        changePrimitiveType(elementId, changeEvent.target.value, workspaceIndex)
      )
    },
    changePrimitiveValue: (elementId, changeEvent, workspaceIndex) => {
      dispatch(
        changePrimitiveValue(elementId, changeEvent.target.value, workspaceIndex)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedElementDialog)
