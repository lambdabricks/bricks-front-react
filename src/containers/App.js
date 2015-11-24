import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Library from '../components/Library'
import Workspace from '../components/Workspace'

const styles = {
  height: '100%'
}

class LambdaBlocksApp extends Component {
  render() {
    const { workspace } = this.props

    return (
      <div style={ styles }>
        <Library />
        <Workspace { ...workspace } />
      </div>
    )
  }
}

LambdaBlocksApp.propTypes = {
  workspace: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const { workspace } = state

  return {
    workspace
  }
}

export default connect(mapStateToProps)(LambdaBlocksApp)
