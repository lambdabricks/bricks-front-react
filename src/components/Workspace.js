import React, { PropTypes, Component } from 'react'

import { isNotEmpty } from '../utils'
import { PositionPropTypes } from '../propTypes'
import SelectedElementDialog from '../containers/SelectedElementDialog'
import Translate from './Translate'
import WorkspaceSurface from '../containers/WorkspaceSurface'

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
      selectedElement,
      unitTests
    } = this.props

    return (
      <div style={ styles }>
        <Translate
          HtmlElement="h2"
          message="workspace"
        />
        { unitTests.map((unitTest, index) => {
            return (
              <WorkspaceSurface
                dragStarted={ dragStarted }
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
  selectedElement: PropTypes.object.isRequired,
  unitTests: PropTypes.array.isRequired
}
