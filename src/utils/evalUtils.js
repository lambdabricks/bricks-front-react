import {
  BRICK
} from './componentNames'

export const doesAllInputsHaveValues = (element, valueIds, unitTest) => {
  const numberOfInputs = Object.keys(element.inputSlots).length

  return (numberOfInputs != valueIds.length) &&
    (unitTestValues(valueIds, unitTest).length == numberOfInputs)
}

export const elementInputValueIds = (element) => {
  let valueIds = []

  for(let id in element.inputSlots) {
    const inputSlot = element.inputSlots[id]

    if(inputSlot.valueId) {
      valueIds[inputSlot.index] = id
    }
  }

  return valueIds
}

const unitTestValues = (valueIds, unitTest) => {
  let values = []

  for(let id in unitTest.values) {
    const element = unitTest.values[id]

    if(element.type && element.value) {
      values.push({
        id,
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
  let args = []

  values.map((element) => {
    args.push(parsers[element.type](element.value))
  })

  return nativeBricks[moduleName][name].apply(null, args)
}
