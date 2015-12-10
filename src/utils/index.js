export const selectedSlots = (workspace) => {
  const { input, output } = workspace.selectionState.pipe
  let selectedSlots = [input && input.slotId, output && output.slotId]

  return selectedSlots.filter(element => element !== null)
}

export const isSlotSelected = (selectedSlots, slotId) => {
  return selectedSlots.indexOf(slotId) !== -1
}
