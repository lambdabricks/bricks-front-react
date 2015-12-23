export const ADD_BRICK = 'ADD_BRICK'
export const ADD_PRIMITIVE = 'ADD_PRIMITIVE'

export const addBrick = (brick) => {
  return {
    type: ADD_BRICK,
    payload: brick
  }
}

export const addPrimitive = (type) => {
  return {
    type: ADD_PRIMITIVE,
    payload: type
  }
}
