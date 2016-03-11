import { connect } from 'react-redux'

import { handleSelectElement } from '../utils'
import TestOutput from '../components/TestOutput'

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: handleSelectElement(dispatch)
  }
}

export default connect(null, mapDispatchToProps)(TestOutput)
