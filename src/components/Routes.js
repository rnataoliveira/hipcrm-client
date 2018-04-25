import React from 'react'
import { Route, Switch } from 'react-router'

import ContractForm from './contracts/ContractForm'
import SalesPipeline from './sales/SalesPipeline'
import CustomerTypeForm from './customers/CustomerTypeForm';

const Routes = () => (
    <Switch>
        <Route path="/customer/type" component={CustomerTypeForm} />
        <Route path="/sales/new" component={SalesPipeline} />
        <Route path="/sales/:id" component={SalesPipeline} />
        <Route path="/contracts/new" component={ContractForm} />
        <Route exact path="/" component={() => <h1>Home</h1>} />
    </Switch>
)

export default Routes