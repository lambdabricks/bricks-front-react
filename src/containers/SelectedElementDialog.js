import { connect } from 'react-redux'

import { removeElement } from '../actions'
import SelectedElementDialog from '../components/SelectedElementDialog'

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (elementId) => {
      dispatch(
        removeElement(elementId)
      )
    }
  }
}

export default connect(null, mapDispatchToProps)(SelectedElementDialog)
