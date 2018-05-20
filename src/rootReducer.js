import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'
import { reducer as oidcReducer } from 'redux-oidc'
import { reducer as salesReducer } from './sales-pipeline'

export default combineReducers({
  routing: routerReducer,
  oidc: oidcReducer,
  salesPipeline: salesReducer
})