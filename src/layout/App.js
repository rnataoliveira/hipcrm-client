import React from 'react'
import { Provider } from 'react-redux'
import { OidcProvider } from 'redux-oidc'
import { ConnectedRouter } from 'react-router-redux'

import { store, history } from '../store'
import { userManager } from '../auth'

import Shell from './Shell'

store.subscribe(() => window.localStorage.setItem('redux-state', JSON.stringify(store.getState())))

const App = () => (
  <Provider store={store}>
    <OidcProvider store={store} userManager={userManager}>
      <ConnectedRouter history={history}>
        <Shell />
      </ConnectedRouter>
    </OidcProvider>
  </Provider>
)

export default App