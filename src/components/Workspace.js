import React, { PropTypes, Component } from 'react'

import { PositionPropTypes } from '../propTypes'
import SelectedElementDialog from '../containers/SelectedElementDialog'
import WorkspaceSurface from '../containers/WorkspaceSurface'

const styles = {
  float: 'left',
  height: '100%'
}

export default class Workspace extends Component {
  render() {
    const {
      mainBrickId,
      selectedElement,
      unitTests
    } = this.props

    const {
      id: selectedElementId,
      mousePosition
    } = selectedElement

    return (
      <div style={ styles }>
        <h2>Workspace</h2>
        { unitTests.map((unitTest, index) => {
            return (
              <WorkspaceSurface
                key={ index }
                mainBrickId={ mainBrickId }
                unitTest={ unitTest }
              />
            )
          })
        }
        { (() => {
            if(selectedElementId)
              return <SelectedElementDialog
                elementId={ selectedElementId }
                mousePosition={ mousePosition }
              />
          })()
        }
      </div>
    )
  }
}

Workspace.propTypes = {
  mainBrickId: PropTypes.number.isRequired,
  selectedElement: PropTypes.shape({
    id: PropTypes.number,
    mousePosition: PositionPropTypes
  }).isRequired,
  unitTests: PropTypes.array.isRequired
}
