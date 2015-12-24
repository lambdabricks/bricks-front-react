import Brick from '../containers/Brick'
import MainBrick from '../containers/MainBrick'
import Pipe from '../containers/Pipe'
import Primitive from '../containers/Primitive'

import {
  BRICK,
  MAIN_BRICK,
  PIPE,
  PRIMITIVE
} from './componentsEnum'

export const getComponent = (type) => {
  switch (type) {
    case BRICK:
      return Brick
    case MAIN_BRICK:
      return MainBrick
    case PIPE:
      return Pipe
    case PRIMITIVE:
      return Primitive
  }
}
