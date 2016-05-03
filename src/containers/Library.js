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
    fetchLibrary: (id) => {
      dispatch(fetchLibraryIfNeeded(id))
    },
    onFunctionClick: (moduleName, brick) => {
      dispatch(addBrick({ arity: brick.arity, moduleName, name: brick.name }))
    },
    onPrimitiveClick: (primitive) => {
      dispatch(addPrimitive(primitive))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library)
