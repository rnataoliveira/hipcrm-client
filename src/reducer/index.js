import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { reducer as oidcReducer } from 'redux-oidc'
import { reducer as salesReducer } from './sales'

const reducer = combineReducers({
  routing: routerReducer,
  oidc: oidcReducer,
  salesPipeline: salesReducer
})

export default reducer