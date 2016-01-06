import { connect } from 'react-redux'

import Workspace from '../components/Workspace'

const mapStateToProps = (state) => {
  let selectedElement = {}

  if(!state.workspace.dragState.dragStarted)
    selectedElement = state.workspace.selectionState.element

  return {
    mainBrickId: state.workspace.mainBrickId,
    selectedElement,
    unitTests: state.workspace.unitTests
  }
}

export default connect(mapStateToProps)(Workspace)
