import {
  ADD_BRICK,
  ADD_PRIMITIVE,
  START_DRAG,
  STOP_DRAG,
} from '../actions'
import Brick from '../components/Brick'
import Primitive from '../containers/Primitive'
import {
  Brick as BrickDefaults,
  RootBrick as RootBrickDefaults,
  Primitive as PrimitiveDefaults
} from '../components/constants'

let id = 1
// TODO: Generate id's with an UID function ??
const nextId = () => id++

const initialWorkspace = {
  actions: [],
  rootBrick: {
    dragState: { },
    inner: [
    ],
    inputSlots: [
      { id: nextId() },
      { id: nextId() }
    ],
    outputSlots: [
      { id: nextId() }
    ],
    position: RootBrickDefaults.defaultPosition,
    size: RootBrickDefaults.defaultSize
  }
}

export const workspace = (state = initialWorkspace, action) => {
  switch (action.type) {
    case ADD_BRICK:
      return appendToInner(state, newBrick(action))
    case ADD_PRIMITIVE:
      return appendToInner(state, newPrimitive(action))
    case START_DRAG:
      return addDragStartedToWorkspace(state, action)
    case STOP_DRAG:
      return addDragStoppedToWorkspace(state, action)
    default:
      return state
  }
}

const appendToInner = (state, element) => {
  return Object.assign({}, state, {
    ...state,
    rootBrick: {
      ...state.rootBrick,
      inner: [
        ...state.rootBrick.inner,
        element
      ]
    }
  })
}

const newBrick = (action) => {
  return {
    id: nextId(),
    inputSlots: [
      { id: nextId() },
      { id: nextId() }
    ],
    name: action.payload,
    outputSlots: [
      { id: nextId() }
    ],
    position: BrickDefaults.defaultPosition,
    size: BrickDefaults.defaultSize,
    type: Brick
  }
}

const newPrimitive = (action) => {
  return {
    id: nextId(),
    name: action.payload,
    position: PrimitiveDefaults.defaultPosition,
    type: Primitive,
    // react or redux ignore pair with value `undefined`
    value: null
  }
}

const addDragStartedToWorkspace = (state, action) => {
  console.log("start drag", action)
  return setDragStateToWorkspace(
    state,
    {
      dragStarted: true,
      elementId: action.payload.elementId,
      startPosition: action.payload.position
    }
  )
}

const addDragStoppedToWorkspace = (state, action) => {
  console.log("stop drag", action)
  return setDragStateToWorkspace(
    state,
    {
      dragStarted: false
    }
  )
}

const setDragStateToWorkspace = (state, dragState) => {
  return Object.assign({}, state, {
    ...state,
    dragState
  })
}
