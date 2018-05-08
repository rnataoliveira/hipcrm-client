import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { OidcProvider } from 'redux-oidc'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import store from './modules/store'
import userManager from './modules/userManager'

import Shell from './components/layout/Shell'

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
