import { testColors } from '../components/constants'

export const FAILING = 'failing'
export const PASSING = 'passing'
export const PENDING = 'pending'

export const getTestResult = (mainBrick, unitTest) => {
  const testOutputId = mainBrick.testOutputIds[0]
  const { valueId } = mainBrick.outputSlots[testOutputId]
  const value = unitTest.values[valueId]
  const testOutput = unitTest.values[testOutputId]

  if(value && value.type && value.value &&
     testOutput && testOutput.type && testOutput.value
  ) {
    if(value.type == testOutput.type && value.value == testOutput.value) {
      return PASSING
    } else {
      return FAILING
    }
  }

  return PENDING
}

export const getTestResultColor = (unitTest) => {
  return testColors[unitTest.result]
}
