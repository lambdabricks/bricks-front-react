import { connect } from 'react-redux'
import { fetchLibraryIfNeeded } from '../actions'
import Library from '../components/Library'

function mapStateToProps(state) {
  return { ...state.library }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchLibrary: fetchLibraryIfNeeded
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library)
