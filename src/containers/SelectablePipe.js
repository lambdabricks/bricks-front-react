import { connect } from 'react-redux'

import SelectablePipe from '../components/SelectablePipe'
import { selectElement } from '../actions'

const LEFT = 0

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (elementId, mouseEvent) => {
      if(mouseEvent.button != LEFT)
        return

      dispatch(
        selectElement(
          elementId,
          { x: mouseEvent.clientX, y: mouseEvent.clientY }
        )
      )
    }
  }
}

export default connect(null, mapDispatchToProps)(SelectablePipe)
