import { testColors } from '../components/constants'

export const getFillColor = (mainBrick, unitTest) => {
  const testOutputId = mainBrick.testOutputIds[0]
  const { valueId } = mainBrick.outputSlots[testOutputId]
  const value = unitTest.values[valueId]

  if(value && value.type && value.value) {
    const testOutputValue = unitTest.values[testOutputId]
    return testColors[
      value.type == testOutputValue.type &&
      value.value == testOutputValue.value
    ]
  }

  return testColors['pending']
}
