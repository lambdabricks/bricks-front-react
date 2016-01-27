import { connect } from 'react-redux'

import {
  moveElement,
  removeSelectedElement,
  selectElementOrStopDrag
} from '../actions'
import WorkspaceSurface from '../components/WorkspaceSurface'

const mapDispatchToProps = (dispatch) => {
  return {
    moveElement: (position) => {
      dispatch(moveElement(position))
    },
    removeSelectedElement: () => {
      // dispatch(removeSelectedElement())
    },
    selectElementOrStopDrag: (mousePosition) => {
      dispatch(selectElementOrStopDrag(mousePosition))
    }
  }
}

export default connect(null, mapDispatchToProps)(WorkspaceSurface)
