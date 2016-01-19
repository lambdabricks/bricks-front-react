export const selectedSlots = (workspace) => {
  const { input, output } = workspace.selectionState.pipe
  const selectedSlots = [input.slotId, output.slotId]

  return selectedSlots.filter(element => element)
}

export const isSlotSelected = (selectedSlots, slotId) => {
  return selectedSlots.indexOf(slotId) !== -1
}
