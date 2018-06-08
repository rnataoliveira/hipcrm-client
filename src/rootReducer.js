import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'
import { reducer as oidcReducer } from 'redux-oidc'
import { reducer as salesReducer } from './sales-pipeline'
import { reducer as customersReducer } from './customers'
import { reducer as agreementReducer } from './agreements'
import { reducer as flashMessagesReducer } from './flash-messages'

export default combineReducers({
  routing: routerReducer,
  oidc: oidcReducer,
  salesPipeline: salesReducer,
  customers: customersReducer,
  agreements: agreementReducer,
  messages: flashMessagesReducer
})