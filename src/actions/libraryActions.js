export const ADD_PRIMITIVE = 'ADD_PRIMITIVE'

export const addPrimitive = (primitive) => {
  return {
    type: ADD_PRIMITIVE,
    payload: primitive
  }
}
