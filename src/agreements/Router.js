import React, { Component } from 'react'
import { Switch } from 'react-router'
import { PrivateRoute } from '../auth'
import {
  AgreementListContainer,
  AgreementDetailsContainer
} from './index'

class Router extends Component {
  render() {
    return (
      <div>
        <Switch>
          <PrivateRoute path="/agreements/:id" component={AgreementDetailsContainer} />
          <PrivateRoute path="/agreements" component={AgreementListContainer} />
        </Switch>
      </div >
    )
  }
}


export default Router