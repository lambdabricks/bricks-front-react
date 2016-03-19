import { getConstant, Slot } from '../components/constants'

import {
  BRICK,
  MAIN_BRICK,
  PRIMITIVE
} from './componentNames'

export const inputSlotPosition = (element, slotId) => {
  const { componentName, position, size } = element

  switch(componentName) {
    case BRICK:
      const { outputSlots } = element

      return {
        x: position.x +
          slotXPosition(outputSlots, slotId, size.width, componentName),
        y: position.y + size.height + Slot.height
      }
    case MAIN_BRICK:
      const { inputSlots } = element

      return {
        x: slotXPosition(inputSlots, slotId, size.width, componentName),
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
  const { componentName, position, size } = element

  switch(componentName) {
    case BRICK:
      const { inputSlots } = element
      return {
        x: position.x +
          slotXPosition(inputSlots, slotId, size.width, componentName),
        y: position.y
      }
    case MAIN_BRICK:
      const { outputSlots } = element

      return {
        x: slotXPosition(outputSlots, slotId, size.width, componentName),
        y: size.height
      }
  }
}

const slotXPosition = (slots, slotId, width, componentName) => {
  const slot = slots[slotId]
  const xOffset = (width - slotGroupWidth(slots, componentName)) / 2

  return xOffset +
    (getConstant(componentName, 'slotOffset') +
      (slot.index * getConstant(componentName, 'slotAndOffset'))
    )
}

const slotGroupWidth = (slots, componentName) => {
  const totalSlots = Object.keys(slots).length

  return getConstant(componentName, 'slotOffset') +
    (totalSlots * getConstant(componentName, 'slotAndOffset'))
}

export const innerInputSlotPosition = (size) => {
  return {
    x: (size.width - Slot.width) / 2,
    y: size.height
  }
}
