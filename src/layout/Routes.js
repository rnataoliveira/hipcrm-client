import React from 'react'
import { Route, Switch } from 'react-router'

import { Home } from '../home'
import { Login, Logout, Callback, PrivateRoute } from '../auth'
import { SalesPipeline } from '../sales-pipeline'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/auth/login" component={Login} />
    <Route path="/auth/logout" component={Logout} />
    <Route path="/auth/callback" component={Callback} />
    <PrivateRoute path="/dashboard" component={() => <h1>Dashboard</h1>} />
    <Route path="/sales/new" component={SalesPipeline} />
    <Route path="/sales/:id" component={SalesPipeline} />
  </Switch>
)

export default Routes