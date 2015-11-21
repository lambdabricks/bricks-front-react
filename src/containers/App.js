import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchLibraryIfNeeded, invalidateLibrary } from '../actions'
import Library from '../components/Library'
import Workspace from '../components/Workspace'

const styles = {
  height: '100%'
}

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchLibraryIfNeeded())
  }

  render() {
    const { library, workspace } = this.props

    return (
      <div style={ styles }>
        <Library { ...library } />
        <Workspace { ...workspace } />
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  library: PropTypes.object.isRequired,
  workspace: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const { library, workspace } = state

  return {
    library,
    workspace
  }
}

export default connect(mapStateToProps)(App)
