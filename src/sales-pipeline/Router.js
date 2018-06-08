import React from 'react'
import { Switch } from 'react-router'
import { PrivateRoute } from '../auth'
import {
  SalesPipeline,
  NewSale,
  SalesList
} from './index'

const Router = () => (
  <div>
    <Switch>
      <PrivateRoute exact path="/sales" component={SalesList} />
      <PrivateRoute path="/sales/new" component={NewSale} />
      <PrivateRoute path="/sales/:id" component={SalesPipeline} />
    </Switch>
  </div >
)

export default Router
