import Brick from '../containers/Brick'
import ClickablePipe from '../containers/ClickablePipe'
import MainBrick from '../containers/MainBrick'
import Primitive from '../containers/Primitive'

import {
  BRICK,
  MAIN_BRICK,
  CLICKABLE_PIPE,
  PRIMITIVE
} from './componentsEnum'

export const getComponent = (type) => {
  switch (type) {
    case BRICK:
      return Brick
    case MAIN_BRICK:
      return MainBrick
    case CLICKABLE_PIPE:
      return ClickablePipe
    case PRIMITIVE:
      return Primitive
  }
}
