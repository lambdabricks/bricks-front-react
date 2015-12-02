export const MOVE_ELEMENT = 'MOVE_ELEMENT'
export const START_DRAG = 'START_DRAG'
export const STOP_DRAG = 'STOP_DRAG'

export const startDrag = (elementId, mousePosition, elementPosition) => {
  return {
    type: START_DRAG,
    payload: {
      elementId,
      mousePosition,
      elementPosition
    }
  }
}

export const stopDrag = () => {
  return {
    type: STOP_DRAG
  }
}

export const moveElement = (currentMousePosition) => {
  return {
    type: MOVE_ELEMENT,
    payload: { currentMousePosition }
  }
}
