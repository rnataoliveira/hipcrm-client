import React from 'react'
import { Provider } from 'react-redux'
import { OidcProvider } from 'redux-oidc'
import { ConnectedRouter } from 'react-router-redux'
import { Switch } from 'react-router'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor, history } from '../store'
import { userManager } from '../auth'

import Shell from './Shell'

const App = () => (
  <Provider store={store}>
    <OidcProvider store={store} userManager={userManager}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <Switch>
            <Shell />
          </Switch>
        </ConnectedRouter>
      </PersistGate>
    </OidcProvider>
  </Provider>
)

export default App
