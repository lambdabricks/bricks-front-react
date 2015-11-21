import { combineReducers } from 'redux'
import { library } from './libraryReducer'
import { workspace } from './workspaceReducer'

export default combineReducers({
  library,
  workspace
})
