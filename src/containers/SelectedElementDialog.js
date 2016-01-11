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
    changePrimitiveType: (elementId, changeEvent) => {
      dispatch(
        changePrimitiveType(elementId, changeEvent.target.value)
      )
    },
    changePrimitiveValue: (elementId, changeEvent) => {
      dispatch(
        changePrimitiveValue(elementId, changeEvent.target.value)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedElementDialog)
