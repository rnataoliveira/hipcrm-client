import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'
import { reducer as oidcReducer } from 'redux-oidc'
import { reducer as salesReducer } from './sales-pipeline'
import { reducer as customersReducer } from './customers'
import { reducer as contractsReducer } from './contracts'

export default combineReducers({
  routing: routerReducer,
  oidc: oidcReducer,
  salesPipeline: salesReducer,
  customers: customersReducer,
  contracts: contractsReducer,
})