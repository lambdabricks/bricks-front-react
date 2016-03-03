import DefaultDetails from './DefaultDetails'
import MainBrickDetails from './MainBrickDetails'
import PrimitiveDetails from './PrimitiveDetails'
import TestInputDetails from './TestInputDetails'

import {
  MAIN_BRICK,
  PRIMITIVE,
  TEST_INPUT
} from '../../utils/componentNames'

export const getDetailsComponent = (type) => {
  switch (type) {
    case MAIN_BRICK:
      return MainBrickDetails
    case PRIMITIVE:
      return PrimitiveDetails
    case TEST_INPUT:
      return TestInputDetails
    default:
      return DefaultDetails
  }
}
