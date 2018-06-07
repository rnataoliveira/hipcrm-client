import React from 'react'
import { Route, Switch } from 'react-router'

import { Home } from '../home'
import { Login, Logout, Callback, PrivateRoute } from '../auth'
import { SalesPipeline, NewSale } from '../sales-pipeline'
import Dashboard from '../home/Dashboard'
import SalesList from '../sales-pipeline/components/SalesList'
import { ContractsListContainer } from '../contracts'
import NewCustomer from '../customers/components/NewCustomer'
import { Reports } from '../reports'
import { CustomerDetailsContainer, CustomerListContainer, CustomerEditContainer, UpdateLegalPerson, UpdatePhysicalPerson } from '../customers'

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
    <PrivateRoute path="/customers/legal-person/:id/edit" component={UpdateLegalPerson} />
    <PrivateRoute path="/customers/physical-person/:id/edit" component={UpdatePhysicalPerson} />
    <PrivateRoute path="/customers/:id" component={CustomerDetailsContainer} />
    <PrivateRoute path="/customers" component={CustomerListContainer} />
    <PrivateRoute path="/agreements" component={ContractsListContainer} />
    <PrivateRoute path="/reports" component={Reports} />
  </Switch>
)

export default Routes