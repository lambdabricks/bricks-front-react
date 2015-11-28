export const START_DRAG = 'START_DRAG'
export const STOP_DRAG = 'STOP_DRAG'

export const startDrag = (elementId, position) => {
  return {
    type: START_DRAG,
    payload: {
      elementId,
      position
    }
  }
}
