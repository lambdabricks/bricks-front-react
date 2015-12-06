import {
  ADD_BRICK,
  ADD_PRIMITIVE,
  MOVE_ELEMENT,
  START_DRAG,
  STOP_DRAG,
} from '../actions'
import Brick from '../containers/Brick'
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
  dragState: {
    dragStarted: false
  },
  rootBrick: {
    id: nextId(),
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
    case MOVE_ELEMENT:
      if(state.dragState.dragStarted)
        return updateElementInWorkspace(state, action)

      return state
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

const updateElementInWorkspace = (state, action) => {
  return Object.assign({}, state, {
    ...state,
    rootBrick: {
      ...state.rootBrick,
      inner: state.rootBrick.inner.map((element) => {
        const { dragState } = state
        if(element.id === dragState.elementId) {
          const { startElementPosition, startMousePosition } = dragState
          const { currentMousePosition } = action.payload

          return {
            ...element,
            position: {
              x: startElementPosition.x + currentMousePosition.x - startMousePosition.x,
              y: startElementPosition.y + currentMousePosition.y - startMousePosition.y,
            }
          }
        }
        return element
      })
    }
  })
}

const addDragStartedToWorkspace = (state, action) => {
  let { elementId, elementPosition, mousePosition } = action.payload

  return setDragStateToWorkspace(
    state,
    {
      dragStarted: true,
      elementId: elementId,
      startElementPosition: elementPosition,
      startMousePosition: mousePosition
    }
  )
}

const addDragStoppedToWorkspace = (state, action) => {
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
