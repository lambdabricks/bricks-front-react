import { Brick, MainBrick, Slot } from '../components/constants'
import {
  BRICK,
  MAIN_BRICK,
  PRIMITIVE
} from './componentNames'
import { selectElement } from '../actions'

export const selectedSlots = (workspace) => {
  const { input, output } = workspace.selectionState.pipe
  const selectedSlots = [input.slotId, output.slotId]

  return selectedSlots.filter(element => element)
}

export const isSlotSelected = (selectedSlots, slotId) => {
  return selectedSlots.indexOf(slotId) !== -1
}

export const inputSlotPosition = (element, slotId) => {
  const { position, size } = element

  switch(element.componentName) {
    case BRICK:
      const { outputSlots } = element

      return {
        x: position.x + brickSlotXPosition(outputSlots, slotId, size.width),
        y: position.y + size.height + Slot.height
      }
    case MAIN_BRICK:
      const { inputSlots } = element

      return {
        x: mainBrickSlotXPosition(inputSlots, slotId, size.width),
        y: -Slot.height
      }
    case PRIMITIVE:
      const slotPosition = innerInputSlotPosition(size)

      return {
        x: position.x + slotPosition.x,
        y: position.y + slotPosition.y
      }
  }
}

export const outputSlotPosition = (element, slotId) => {
  const { position, size } = element

  switch(element.componentName) {
    case BRICK:
      const { inputSlots } = element
      return {
        x: position.x + brickSlotXPosition(inputSlots, slotId, size.width),
        y: position.y
      }
    case MAIN_BRICK:
      const { outputSlots } = element

      return {
        x: mainBrickSlotXPosition(outputSlots, slotId, size.width),
        y: size.height
      }
  }
}

const brickSlotXPosition = (slots, slotId, width) => {
  return slotXPosition(slots, slotId, width, Brick)
}

const mainBrickSlotXPosition = (slots, slotId, width) => {
  return slotXPosition(slots, slotId, width, MainBrick)
}

const slotXPosition = (slots, slotId, width, constants) => {
  const xOffset = (width - slotGroupWidth(slots, constants)) / 2
  let slotIndex = 0

  for(var i=0; i < slots.length; i++) {
    if(slots[i].id == slotId) {
      slotIndex = i
      break
    }
  }

  return xOffset + (constants.slotOffset + (slotIndex * constants.slotAndOffset))
}

const slotGroupWidth = (slots, constants) => {
  return constants.slotOffset + (slots.length * constants.slotAndOffset)
}

export const innerInputSlotPosition = (size) => {
  return {
    x: (size.width - Slot.width) / 2,
    y: size.height
  }
}

export const isNotEmpty = (object) => {
  return Object.keys(object).length > 0
}


const LEFT = 0

export const handleSelectElement = (dispatch) => {
  return (elementId, mouseEvent) => {
    if(mouseEvent.button != LEFT)
      return

    dispatch(
      selectElement(
        elementId,
        { x: mouseEvent.clientX, y: mouseEvent.clientY }
      )
    )
  }
}
