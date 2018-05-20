import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createOidcMiddleware, { } from 'redux-oidc'
import createHistory from 'history/createBrowserHistory'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

import { userManager } from './auth'
import reducer from './rootReducer'

const oidcMiddleware = createOidcMiddleware(userManager)

const initialState = { }

const history = createHistory()

const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
  responseType: JSON
})

const createStoreWithMiddlewares = compose(
  applyMiddleware(oidcMiddleware, routerMiddleware(history), axiosMiddleware(apiClient))
)(createStore)

const store = createStoreWithMiddlewares(reducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
