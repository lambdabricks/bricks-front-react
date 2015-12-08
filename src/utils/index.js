export const selectedSlots = (workspace) => {
  const { INPUT, OUTPUT } = workspace.selectionState.pipe
  let selectedSlots = [INPUT && INPUT.slotId, OUTPUT && OUTPUT.slotId]

  return selectedSlots.filter(element => element !== null)
}

export const isSlotSelected = (selectedSlots, slotId) => {
  return selectedSlots.indexOf(slotId) !== -1
}
