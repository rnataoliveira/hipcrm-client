import React from 'react'
import { Provider } from 'react-redux'
import { OidcProvider } from 'redux-oidc'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import store from '../modules/store'
import userManager from '../modules/userManager'

import Shell from './layout/Shell'

store.subscribe(() => window.localStorage.setItem('redux-state', JSON.stringify(store.getState())))

const App = () => (
  <Provider store={store}>
    <OidcProvider store={store} userManager={userManager}>
      <ConnectedRouter history={createHistory()}>
        <Shell />
      </ConnectedRouter>
    </OidcProvider>
  </Provider>
)

export default App
