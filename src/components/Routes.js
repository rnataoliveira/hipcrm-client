import React from 'react'
import { Route, Switch } from 'react-router'
import PrivateRoute from './auth/PrivateRoute'

import Login from './auth/Login'
import Logout from './auth/Logout'
import Callback from './auth/Callback'
import ContractForm from './contracts/ContractForm'
import SalesPipeline from './sales/SalesPipeline'
import ContractPerson from './contracts/ContractPerson'
import ContractLegalPerson from './contracts/ContractLegalPerson'
import PersonFormExists from './customers/PersonFormExists';
import LegalFormExists from './customers/LegalFormExists';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={() => <h1>Home Publica</h1>} />
    <Route path="/ping" component={() => <h1>Pong!</h1>} />
    <Route path="/auth/login" component={Login} />
    <Route path="/auth/logout" component={Logout} />
    <Route path="/auth/callback" component={Callback} />
    <PrivateRoute path="/dashboard" component={() => <h1>Dashboard</h1>} />
    <Route path="/sales/new" component={SalesPipeline} />
    <Route path="/sales/:id" component={SalesPipeline} />
    <PrivateRoute path="/contracts/new" component={ContractForm} />
    <PrivateRoute path="/contracts/new/physical-person" component={ContractPerson} />
    <PrivateRoute path="/contracts/new/legal-person" component={ContractLegalPerson} />
    <PrivateRoute path="/personform-exists" component={PersonFormExists} />
    <PrivateRoute path="/legalform-exists" component={LegalFormExists} />
  </Switch>
)

export default Routes