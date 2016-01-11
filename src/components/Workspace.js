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
      mainBrickId,
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
                key={ index }
                mainBrickId={ mainBrickId }
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
  mainBrickId: PropTypes.number.isRequired,
  selectedElement: PropTypes.object.isRequired,
  unitTests: PropTypes.array.isRequired
}
