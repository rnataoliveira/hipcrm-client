import React from 'react'
import { Route, Switch } from 'react-router'
import PrivateRoute from './layout/PrivateRoute'

import Login from './account/Login'
import Callback from './auth/Callback'
import ContractForm from './contracts/ContractForm'
import SalesPipeline from './sales/SalesPipeline'
import ContractPerson from './contracts/ContractPerson'
import ContractLegalPerson from './contracts/ContractLegalPerson'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={() => <h1>Home Publica</h1>} />
        <Route path="/ping" component={() => <h1>Pong!</h1>} />
        <Route path="/login" component={Login} />
        <Route path="/auth/callback" component={Callback} />
        <PrivateRoute path="/dashboard" component={() => <h1>Dashboard</h1>} />
        <PrivateRoute path="/sales/new" component={SalesPipeline} />
        <PrivateRoute path="/sales/:id" component={SalesPipeline} />
        <PrivateRoute path="/contracts/new" component={ContractForm} />
        <PrivateRoute path="/contracts/new/physical-person" component={ContractPerson} />
        <PrivateRoute path="/contracts/new/legal-person" component={ContractLegalPerson} />
    </Switch>
)

export default Routes