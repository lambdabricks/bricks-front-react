import {
  BRICK
} from './componentNames'

export const doesAllInputsHaveValues = (element, valueIds, unitTest) => {
  const numberOfInputs = Object.keys(element.inputSlots).length

  return (numberOfInputs == valueIds.length) &&
    (unitTestValues(valueIds, unitTest).length == numberOfInputs)
}

export const elementInputValueIds = (element) => {
  let valueIds = []

  for(let id in element.inputSlots) {
    const inputSlot = element.inputSlots[id]

    if(inputSlot.valueId) {
      valueIds[inputSlot.index] = inputSlot.valueId
    }
  }

  return valueIds
}

const unitTestValues = (valueIds, unitTest) => {
  let values = []

  for(let id in valueIds) {
    const valueId = valueIds[id]
    const element = unitTest.values[valueId]

    if(element.type && element.value) {
      values.push({
        id: valueId,
        type: element.type,
        value: element.value
      })
    }
  }

  return values
}

const nativeBricks = {
  boolean: {
    "&&": (a, b) => a && b,
    "||": (a, b) => a || b,
    "!": (a) => !a
  }
}

const parsers = {
  boolean: (value) => value.toLowerCase() == "true",
  number: (value) => parseFloat(value),
  string: (value) => value
}

export const evalBrick = (brick, valueIds, unitTest) => {
  const { moduleName, name } = brick

  const values = unitTestValues(valueIds, unitTest)
  const args = values.map((element) => {
    return parsers[element.type](element.value)
  })

  return nativeBricks[moduleName][name].apply(null, args)
}
