import { connect } from 'react-redux'

import { handleSelectElement } from '../utils'
import SelectablePipe from '../components/SelectablePipe'

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: handleSelectElement(dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SelectablePipe)
