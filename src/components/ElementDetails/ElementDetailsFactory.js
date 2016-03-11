import DefaultDetails from './DefaultDetails'
import MainBrickDetails from './MainBrickDetails'
import PrimitiveDetails from './PrimitiveDetails'
import TestNodeDetails from './TestNodeDetails'

import {
  MAIN_BRICK,
  PRIMITIVE,
  TEST_INPUT,
  TEST_OUTPUT
} from '../../utils/componentNames'

export const getDetailsComponent = (type) => {
  switch (type) {
    case MAIN_BRICK:
      return MainBrickDetails
    case PRIMITIVE:
      return PrimitiveDetails
    case TEST_INPUT:
    case TEST_OUTPUT:
      return TestNodeDetails
    default:
      return DefaultDetails
  }
}
