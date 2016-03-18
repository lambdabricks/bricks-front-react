import {
  BRICK,
  MAIN_BRICK
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

    if(inputSlot.value) {
      valueIds[inputSlot.index] = inputSlot.value.slotId
    }
  }

  return valueIds
}

const unitTestValues = (valueIds, unitTest) => {
  let values = []

  for(let id in valueIds) {
    const valueId = valueIds[id]
    const element = unitTest.values[valueId]

    if(element && element.type !== 'error' && element.value) {
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
  arithmetic: {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
  },
  boolean: {
    "&&": (a, b) => a && b,
    "||": (a, b) => a || b,
    "!": (a) => !a
  },
  string: {
    "concat": (a, b) => a.concat(b),
    "length": (a) => a.length,
    "reverse": (a) => a.split('').reverse().join(''),
    "split": (a) => a.split(''),
  }
}

const parsers = {
  boolean: (value) => value.toLowerCase() == "true",
  number: (value) => parseFloat(value),
  string: (value) => value
}

const _evalBrick = (brick, args) => {
  const { moduleName, name } = brick
  const brickOutput = nativeBricks[moduleName][name].apply(null, args)

  if(brickOutput === undefined) {
    return {
      componentName: BRICK,
      type: 'error',
      value: 'error'
    }
  }

  return {
    componentName: BRICK,
    type: _getOutputType(brickOutput),
    value: brickOutput.toString()
  }
}

export const tryEvalPath = (workspace, unitTest, elementId) => {
  let newUnitTest = Object.assign({}, unitTest)

  return _tryEvalPath(workspace, newUnitTest, elementId)
}

const _tryEvalPath = (workspace, unitTest, elementId) => {
  const brick = workspace.entities[elementId]
  let args = []

  if(brick.componentName != BRICK) {
    return unitTest
  }

  for(var id in brick.inputSlots) {
    const { value } = brick.inputSlots[id]
    const slotValue = unitTest.values[value.slotId]

    if(slotValue && slotValue.type && slotValue.value) {
      args.push(parsers[slotValue.type](slotValue.value))
    } else {
      return unitTest
    }
  }

  const outputSlotId = Object.keys(brick.outputSlots)[0]
  const outputSlot = brick.outputSlots[outputSlotId]

  unitTest.values[outputSlotId] = _evalBrick(brick, args)

  outputSlot.outputElementIds.forEach((id) =>
    _tryEvalPath(workspace, unitTest, id)
  )

  return unitTest
}

export const evalPathValueIds = (workspace, element, valueIds) => {
  if(element.componentName != MAIN_BRICK) {
    const outputSlotId = Object.keys(element.outputSlots)[0]
    const outputSlot = element.outputSlots[outputSlotId]

    valueIds.push(outputSlot.id)

    if(outputSlot.outputElementIds) {
      outputSlot.outputElementIds.forEach((id) => {
        evalPathValueIds(workspace, workspace.entities[id], valueIds)
      })
    }
  }

  return valueIds
}

const _getOutputType = (output) => {
  if(Array.isArray(output)) {
    return 'list'
  } else {
    return typeof output
  }
}
