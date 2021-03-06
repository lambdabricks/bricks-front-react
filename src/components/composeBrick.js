import React, { PropTypes, Component } from 'react'
import { Group } from 'react-art'
import Rectangle from 'react-art/lib/Rectangle.art'

import { getConstant } from './constants'
import { PositionPropTypes, SizePropTypes, SlotPropTypes } from '../propTypes'

import SlotGroup from './SlotGroup'

export default function composeBrick(InnerComponent) {
  class AbstractBrick extends Component {
    render() {
      const {
        componentName,
        id,
        inputSlots,
        outputSlots,
        position,
        selectBrickInputSlot,
        selectBrickOutputSlot,
        selectedSlots,
        size
      } = this.props
      const slotHeight = getConstant(componentName, 'slotHeight')

      return (
        <Group x={ position.x } y={ position.y }>
          <InnerComponent { ...this.props } />
          <SlotGroup
            componentName={ componentName }
            parentId={ id }
            parentWidth={ size.width }
            selectedSlots={ selectedSlots }
            selectSlot={ selectBrickInputSlot }
            slots={ inputSlots }
            y={ 0 }
          />
          <SlotGroup
            componentName={ componentName }
            parentId={ id }
            parentWidth={ size.width }
            selectedSlots={ selectedSlots }
            selectSlot={ selectBrickOutputSlot }
            slots={ outputSlots }
            y={ size.height + slotHeight }
          />
        </Group>
      )
    }
  }

  AbstractBrick.propTypes = {
    componentName: PropTypes.string.isRequired,
    inputSlots: SlotPropTypes.isRequired,
    outputSlots: SlotPropTypes.isRequired,
    position: PositionPropTypes.isRequired,
    selectBrickInputSlot: PropTypes.func.isRequired,
    selectBrickOutputSlot: PropTypes.func.isRequired,
    selectedSlots: PropTypes.arrayOf(PropTypes.number).isRequired,
    size: SizePropTypes.isRequired
  }

  AbstractBrick.displayName = InnerComponent.name

  return AbstractBrick
}
