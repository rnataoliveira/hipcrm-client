import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createOidcMiddleware, { } from 'redux-oidc'
import createHistory from 'history/createBrowserHistory'

import userManager from './userManager'
import reducer from '../reducer'

const oidcMiddleware = createOidcMiddleware(userManager)

const initialState = {}

const history = createHistory()

const createStoreWithMiddlewares = compose(
    applyMiddleware(oidcMiddleware, routerMiddleware(history))
)(createStore)

const store = createStoreWithMiddlewares(reducer, initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
