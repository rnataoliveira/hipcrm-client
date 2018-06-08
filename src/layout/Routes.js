import React from 'react'
import { Route, Switch } from 'react-router'

import { Home } from '../home'
import { Login, Logout, Callback, PrivateRoute } from '../auth'
import Dashboard from '../home/Dashboard'
import { AgreementListContainer } from '../agreements'
import { Reports } from '../reports'

import { Router as CustomersModule } from '../customers'
import { Router as SalesModule } from '../sales-pipeline'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/auth/login" component={Login} />
    <Route path="/auth/logout" component={Logout} />
    <Route path="/auth/callback" component={Callback} />
    <PrivateRoute path="/dashboard" component={Dashboard} />
    <PrivateRoute path="/sales" component={SalesModule} />
    <PrivateRoute path="/customers" component={CustomersModule} />
    <PrivateRoute path="/agreements" component={AgreementListContainer} />
    <PrivateRoute path="/reports" component={Reports} />
  </Switch>
)

export default Routes