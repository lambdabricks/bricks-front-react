export const selectedSlots = (state) => {
  const { INPUT, OUTPUT } = state.workspace.selectionState.pipe
  let selectedSlots = [INPUT && INPUT.slotId, OUTPUT && OUTPUT.slotId]

  return selectedSlots.filter(element => element !== null)
}
