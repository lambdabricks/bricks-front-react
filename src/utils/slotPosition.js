import { Brick, MainBrick, Slot } from '../components/constants'
import {
  BRICK,
  MAIN_BRICK,
  PRIMITIVE
} from './componentNames'

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
  return slotXPosition(slots, slot[slotId], width, Brick)
}

const mainBrickSlotXPosition = (slots, slot, width) => {
  return slotXPosition(slots, slot, width, MainBrick)
}

const slotXPosition = (slots, slot, width, constants) => {
  const xOffset = (width - slotGroupWidth(slots, constants)) / 2

  return xOffset +
    (constants.slotOffset + (slot.index * constants.slotAndOffset))
}

const slotGroupWidth = (slots, constants) => {
  const totalSlots = Object.keys(slots).length

  return constants.slotOffset + (totalSlots * constants.slotAndOffset)
}

export const innerInputSlotPosition = (size) => {
  return {
    x: (size.width - Slot.width) / 2,
    y: size.height
  }
}
