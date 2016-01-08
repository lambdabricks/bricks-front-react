import { connect } from 'react-redux'

import { removeElement } from '../actions'
import SelectedElementDialog from '../components/SelectedElementDialog'

const mapStateToProps = (state, ownProps) => {
  const { entities } = state.workspace
  const { id } = ownProps

  return {
    ...entities[id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (elementId) => {
      dispatch(
        removeElement(elementId)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedElementDialog)
