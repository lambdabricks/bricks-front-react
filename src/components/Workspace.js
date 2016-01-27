import React, { PropTypes, Component } from 'react'

import { isNotEmpty } from '../utils'
import { PositionPropTypes } from '../propTypes'
import SelectedElementDialog from '../containers/SelectedElementDialog'
import Translate from './Translate'
import WorkspaceSurface from './WorkspaceSurface'

const styles = {
  float: 'left',
  height: '100%',
  WebkitUserSelect: 'none'
}

export default class Workspace extends Component {
  render() {
    const {
      dragStarted,
      mainBrick,
      moveElement,
      selectedElement,
      selectElementOrStopDrag,
      unitTests
    } = this.props
    let handleMouseMove, handleMouseUp

    if(dragStarted) {
      handleMouseMove = (e) => {
        moveElement({ x: e.clientX, y: e.clientY })
      }
      handleMouseUp = (e) => {
        selectElementOrStopDrag({ x: e.clientX, y: e.clientY })
      }
    }
    else {
      handleMouseMove = () => {}
      handleMouseUp = () => {}
    }

    return (
      <div
        onMouseMove={ handleMouseMove }
        onMouseUp={ handleMouseUp }
        style={ styles }
      >
        <Translate
          HtmlElement="h2"
          message="workspace"
        />
        { unitTests.map((unitTest, index) => {
            return (
              <WorkspaceSurface
                key={ index }
                mainBrick={ mainBrick }
                unitTest={ unitTest }
              />
            )
          })
        }
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
  selectElementOrStopDrag: PropTypes.func.isRequired,
  unitTests: PropTypes.array.isRequired
}
