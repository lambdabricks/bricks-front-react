import { connect } from 'react-redux'

import Workspace from '../components/Workspace'

const mapStateToProps = (state) => {
  return {
    mainBrickId: state.workspace.mainBrickId,
    selectedElementId: state.workspace.selectionState.elementId,
    unitTests: state.workspace.unitTests
  }
}

export default connect(mapStateToProps)(Workspace)
