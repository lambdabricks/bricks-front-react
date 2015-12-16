import { Brick, Primitive, Slot } from '../components/constants'

export const selectedSlots = (workspace) => {
  const { input, output } = workspace.selectionState.pipe
  let selectedSlots = [input && input.slotId, output && output.slotId]

  return selectedSlots.filter(element => element !== null)
}

export const isSlotSelected = (selectedSlots, slotId) => {
  return selectedSlots.indexOf(slotId) !== -1
}

export const inputSlotPosition = (element, slotId) => {
  const { position } = element

  switch(element.type.WrappedComponent.name) {
    case 'AbstractBrick':
      const { outputSlots, size } = element

      return {
        x: position.x + slotXPosition(outputSlots, slotId, size),
        y: position.y + size.height + Slot.height
      }
    case 'Primitive':
      const slotPosition = innerInputSlotPosition(slotId)

      return {
        x: position.x + slotPosition.x,
        y: position.y + slotPosition.y
      }
  }
}

export const outputSlotPosition = (element, slotId) => {
  const { inputSlots, position, size } = element

  return {
    x: position.x + slotXPosition(inputSlots, slotId, size),
    y: position.y
  }
}

const slotXPosition = (slots, slotId, size) => {
  const xOffset = (size.width - slotGroupWidth(slots)) / 2
  let slotIndex = 0

  for(var i=0; i < slots.length; i++) {
    if(slots[i].id == slotId) {
      slotIndex = i
      break
    }
  }

  return xOffset + (Brick.slotOffset + (slotIndex * Brick.slotAndOffset))
}

const slotGroupWidth = (slots) => {
  return Brick.slotOffset + (slots.length * Brick.slotAndOffset)
}

const innerInputSlotPosition = (slotId) => {
  return {
    x: Primitive.radius - (Slot.width / 2),
    y: Primitive.radius * 2
  }
}
