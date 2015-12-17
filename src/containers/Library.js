import { connect } from 'react-redux'
import { addBrick, addPrimitive, fetchLibraryIfNeeded } from '../actions'
import Library from '../components/Library'

const mapStateToProps = (state) => {
  return {
    ...state.library
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLibrary: () => {
      dispatch(fetchLibraryIfNeeded())
    },
    onFunctionClick: (brick) => {
      dispatch(addBrick(brick))
    },
    onPrimitiveClick: (primitive) => {
      dispatch(addPrimitive(primitive))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library)
