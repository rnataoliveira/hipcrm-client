import React from 'react'
import { Route, Switch } from 'react-router'

import ContractForm from './contracts/ContractForm'
import SalesPipeline from './sales/SalesPipeline'

import ContractPerson from './contracts/ContractPerson'
import ContractLegalPerson from './contracts/ContractLegalPerson'

const Routes = () => (
    <Switch>
        <Route path="/contracts/new/physical-person" component={ContractPerson} />
        <Route path="/contracts/new/legal-person" component={ContractLegalPerson} />

        <Route path="/sales/new" component={SalesPipeline} />
        <Route path="/sales/:id" component={SalesPipeline} />
        <Route path="/contracts/new" component={ContractForm} />
        <Route exact path="/" component={() => <h1>Home</h1>} />
    </Switch>
)

export default Routes