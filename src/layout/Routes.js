import React from 'react'
import { Route, Switch } from 'react-router'

import { Home } from '../home'
import { Login, Logout, Callback, PrivateRoute } from '../auth'
import { SalesPipeline, NewSale } from '../sales-pipeline'
import Dashboard from '../home/Dashboard'
import SalesList from '../sales-pipeline/components/SalesList'
import { ContractsListContainer } from '../contracts'
import NewCustomer from '../customers/components/NewCustomer'
import CreateReport from '../reports/components/CreatReport'
import { ReportsListContainer } from '../reports'
import { CustomerDetailsContainer, CustomerListContainer, CustomerEditContainer } from '../customers'

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
    <PrivateRoute path="/customers/new" component={NewCustomer} />
    <PrivateRoute path="/customers/:id/edit" component={CustomerEditContainer} />
    <PrivateRoute path="/customers/:id" component={CustomerDetailsContainer} />
    <PrivateRoute path="/customers" component={CustomerListContainer} />
    <PrivateRoute path="/agreements" component={ContractsListContainer} />
    <PrivateRoute path="/reports/new" component={CreateReport} />
    <PrivateRoute path="/reports" component={ReportsListContainer} />
  </Switch>
)

export default Routes