import { connect } from 'react-redux'
import { fetchLibraryIfNeeded } from '../actions'
import Library from '../components/Library'

function mapStateToProps(state) {
    return { ...state.library }
}

export default connect(mapStateToProps)(Library)
