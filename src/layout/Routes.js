import React from 'react'
import { Route, Switch } from 'react-router'

import { Home } from '../home'
import { Login, Logout, Callback, PrivateRoute } from '../auth'
import { SalesPipeline, NewSale } from '../sales-pipeline'
import { CustomerDetailsContainer } from '../customers'
import Dashboard from '../home/Dashboard';
import SalesList from '../sales-pipeline/components/SalesList';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/auth/login" component={Login} />
    <Route path="/auth/logout" component={Logout} />
    <Route path="/auth/callback" component={Callback} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <PrivateRoute exact path="/sales" component={SalesList} />
    <PrivateRoute path="/sales/new" component={NewSale} />
    <PrivateRoute path="/sales/:id" component={SalesPipeline} />
    <PrivateRoute path="/customers/:id" component={CustomerDetailsContainer} />
  </Switch>
)

export default Routes