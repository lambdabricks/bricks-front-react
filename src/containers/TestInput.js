import { connect } from 'react-redux'

import { handleSelectElement } from '../utils'
import TestInput from '../components/TestInput'

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: handleSelectElement(dispatch)
  }
}

export default connect(null, mapDispatchToProps)(TestInput)
