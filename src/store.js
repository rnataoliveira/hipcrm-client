import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createOidcMiddleware, { } from 'redux-oidc'
import createHistory from 'history/createBrowserHistory'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native


import { userManager } from './auth'
import reducer from './rootReducer'

const oidcMiddleware = createOidcMiddleware(userManager)

const initialState = { }

const history = createHistory()

const apiClient = axios.create({
  baseURL: 'https://3948dc92.ngrok.io',
  responseType: JSON
})

const createStoreWithMiddlewares = compose(
  applyMiddleware(oidcMiddleware, routerMiddleware(history), axiosMiddleware(apiClient))
)(createStore)

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStoreWithMiddlewares(persistedReducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const persistor = persistStore(store)

export { 
  store,
  persistor,
  history
}
