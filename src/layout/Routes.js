import React from 'react'
import { Route, Switch } from 'react-router'

import { Home } from '../home'
import { Login, Logout, Callback, PrivateRoute } from '../auth'
import { SalesPipeline, NewSale } from '../sales-pipeline'
import Dashboard from '../home/Dashboard';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/auth/login" component={Login} />
    <Route path="/auth/logout" component={Logout} />
    <Route path="/auth/callback" component={Callback} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <Route path="/sales/new" component={NewSale} />
    <Route path="/sales/:id" component={SalesPipeline} />
  </Switch>
)

export default Routes