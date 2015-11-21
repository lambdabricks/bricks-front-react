const initialState = {
  actions: [],
  surface: {
    rootBrick: {
      inputSlots: [
        { id: 1 },
        { id: 2 }
      ],
      outputSlots: [
        { id: 3 }
      ],
      position: {
        x: 50,
        y: 50
      },
      size: {
        height: 400,
        width: 350
      }
    }
  }
}

export function workspace(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
