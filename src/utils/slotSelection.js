export const selectedSlots = (workspace) => {
  const { input, output } = workspace.selectionState.pipe
  const selectedSlots = [input.slotId, output.slotId]

  return selectedSlots.filter(element => element)
}

export const isSlotSelected = (selectedSlots, slotId) => {
  return selectedSlots.indexOf(slotId) !== -1
}

export const areSlotsInSameElement = (pipeSelectionState) => {
  const { input, output } = pipeSelectionState

  return input.elementId && input.elementId === output.elementId
}

export const isPipeNotAllowedInsideElement = (workspace, elementId) => {
  return !workspace.entities[elementId].innerIds
}
