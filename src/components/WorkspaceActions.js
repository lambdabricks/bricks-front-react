import React, { PropTypes, Component } from 'react'

const styles = {
  float: 'left',
  height: '550px',
  width: '25px',
  marginLeft: '10px'
}

export default class WorkspaceActions extends Component {
  render() {
    const actions = this.props.actions

    return (
      <div style={ styles } />
    )
  }
}

WorkspaceActions.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired
    })
  ).isRequired
}
