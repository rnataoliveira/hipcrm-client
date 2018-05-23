import React from 'react'
import { Provider } from 'react-redux'
import { OidcProvider } from 'redux-oidc'
import { ConnectedRouter } from 'react-router-redux'
import { Switch } from 'react-router'

import { store, history } from '../store'
import { userManager } from '../auth'

import Shell from './Shell'

const App = () => (
  <Provider store={store}>
    <OidcProvider store={store} userManager={userManager}>
      <ConnectedRouter history={history}>
        <Switch>
          <Shell />
        </Switch>
      </ConnectedRouter>
    </OidcProvider>
  </Provider>
)

export default App
