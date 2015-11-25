import { connect } from 'react-redux'
import { addPrimitive, fetchLibraryIfNeeded } from '../actions'
import Library from '../components/Library'

function mapStateToProps(state) {
  return { ...state.library }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchLibrary: fetchLibraryIfNeeded,
    onPrimitiveClick: (primitive) => {
      dispatch(addPrimitive(primitive))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library)
