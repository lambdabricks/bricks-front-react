export const updateSlotSelectionStateInWorkspace = (state, payload) => {
  const { elementId, slotId, type } = payload

  return Object.assign({}, state, {
    ...state,
    selectionState: {
      ...state.selectionState,
      pipe: {
        ...state.selectionState.pipe,
        [type]: {
          elementId,
          slotId
        }
      }
    }
  })
}
