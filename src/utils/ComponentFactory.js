import Brick from '../containers/Brick'
import SelectablePipe from '../containers/SelectablePipe'
import MainBrick from '../containers/MainBrick'
import Primitive from '../containers/Primitive'

import {
  BRICK,
  MAIN_BRICK,
  SELECTABLE_PIPE,
  PRIMITIVE
} from './componentsEnum'

export const getComponent = (type) => {
  switch (type) {
    case BRICK:
      return Brick
    case MAIN_BRICK:
      return MainBrick
    case SELECTABLE_PIPE:
      return SelectablePipe
    case PRIMITIVE:
      return Primitive
  }
}
