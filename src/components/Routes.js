import React from 'react'
import { Route, Switch } from 'react-router'

import ContractForm from './contracts/ContractForm'
import SalesPipeline from './sales/SalesPipeline'
import CustomerTypeForm from './customers/CustomerTypeForm'
import PersonForm from './customers/PersonForm'
import LegalForm from './customers/LegalForm'

import ContractPerson from './contracts/ContractPerson'
import ContractLegalPerson from './contracts/ContractLegalPerson'

const Routes = () => (
    <Switch>
        <Route path="/contracts/new/physical-person" component={ContractPerson} />
        <Route path="/contracts/new/legal-person" component={ContractLegalPerson} />

        <Route path="/customer/type" component={CustomerTypeForm} />
        <Route path="/customer/new/physical-person" component={PersonForm} />
        <Route path="/customer/new/legal-person" component={LegalForm} />
        <Route path="/sales/new" component={SalesPipeline} />
        <Route path="/sales/:id" component={SalesPipeline} />
        <Route path="/contracts/new" component={ContractForm} />
        <Route exact path="/" component={() => <h1>Home</h1>} />
    </Switch>
)

export default Routes