import { connect } from 'react-redux'
import WorkspaceSurface from '../components/WorkspaceSurface'

const mapStateToProps = (state) => {
    return {
      mainBrick: state.workspace.mainBrick,
      dragState: state.workspace.dragState
    }
}

export default connect(mapStateToProps)(WorkspaceSurface)
