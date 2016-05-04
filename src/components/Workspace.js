import React, { PropTypes, Component } from 'react'

import { isNotEmpty } from '../utils'
import { PositionPropTypes } from '../propTypes'

import SelectedElementDialog from '../containers/SelectedElementDialog'
import TestSummary from './TestSummary'
import Translate from './Translate'
import WorkspaceSurface from './WorkspaceSurface'

const styles = {
  WebkitUserSelect: 'none'
}

const workspaceHeaderStyles = {
  display: 'inline-block',
  marginRight: '30px'
}

const workspacesStyles = {
  display: 'flex'
}

export default class Workspace extends Component {
  render() {
    const {
      dragStarted,
      mainBrick,
      moveElement,
      selectedElement,
      selectedSlots,
      selectElementOrStopDrag,
      unitTests
    } = this.props
    let handleMouseMove, handleMouseUp

    if(dragStarted) {
      handleMouseMove = (e) => {
        moveElement({ x: e.pageX, y: e.pageY })
      }
      handleMouseUp = (e) => {
        selectElementOrStopDrag({ x: e.pageX, y: e.pageY })
      }
    }
    else {
      handleMouseMove = () => {}
      handleMouseUp = () => {}
    }

    return (
      <div
        id="workspace"
        onMouseMove={ handleMouseMove }
        onMouseUp={ handleMouseUp }
        style={ styles }
      >
        <div>
          <Translate
            childProps={ { style: workspaceHeaderStyles } }
            HtmlElement="h2"
            message="workspace"
          />
          <TestSummary unitTests={ unitTests } />
        </div>
        <div style={ workspacesStyles} >
          { unitTests.map((unitTest, index) => {
              return (
                <WorkspaceSurface
                  index={ index }
                  key={ index }
                  mainBrick={ mainBrick }
                  selectedSlots={ selectedSlots }
                  unitTest={ unitTest }
                />
              )
            })
          }
        </div>
        { isNotEmpty(selectedElement) &&
          <SelectedElementDialog { ...selectedElement } />
        }
      </div>
    )
  }
}

Workspace.propTypes = {
  dragStarted: PropTypes.bool.isRequired,
  mainBrick: PropTypes.object.isRequired,
  moveElement: PropTypes.func.isRequired,
  selectedElement: PropTypes.object.isRequired,
  selectedSlots: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectElementOrStopDrag: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  unitTests: PropTypes.array.isRequired
}
