import React, { Component } from 'react'
import { Switch } from 'react-router'
import { PrivateRoute } from '../auth'
import {
  CustomerDetailsContainer,
  CustomerListContainer,
  CustomerEditContainer,
  UpdateLegalPerson,
  UpdatePhysicalPerson,
  NewCustomer
} from './index'

class Router extends Component {
  render() {
    return (
      <div>
        < Switch >
          <PrivateRoute path="/customers/new" component={NewCustomer} />
          <PrivateRoute path="/customers/:id/edit" component={CustomerEditContainer} />
          <PrivateRoute path="/customers/legal-person/:id/edit" component={UpdateLegalPerson} />
          <PrivateRoute path="/customers/physical-person/:id/edit" component={UpdatePhysicalPerson} />
          <PrivateRoute path="/customers/:id" component={CustomerDetailsContainer} />
          <PrivateRoute path="/customers" component={CustomerListContainer} />
        </Switch >
      </div >
    )
  }
}


export default Router