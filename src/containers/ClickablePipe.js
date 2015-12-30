import { connect } from 'react-redux'

import ClickablePipe from '../components/ClickablePipe'
import { selectElement } from '../actions'

const LEFT = 0

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (elementId, mouseEvent) => {
      if(mouseEvent.button != LEFT)
        return

      console.log(elementId, mouseEvent)

      dispatch(
        selectElement(
          elementId,
          { x: mouseEvent.clientX, y: mouseEvent.clientY }
        )
      )
    }
  }
}

export default connect(null, mapDispatchToProps)(ClickablePipe)
