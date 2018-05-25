import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'

import CustomerDetailsContainer from '../containers/CustomerDetailsContainer'
import CustomerSource from './CustomerSource'

const NewSale = ({ match, location }) => (
  <div className='row mt-5'>
    <div className="col-12">
      <div className="">
        <div className="col-12">
          <h1>
            Processo de Vendas <small className="ml-2 text-muted">Nova Venda</small>
          </h1>
        </div>
        <div className="col-12">
          <ul className="nav nav-tabs">
            <li className="nav-item col-4">
              <Link to={match.url} className="nav-link active">Cliente</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path='/sales/new' component={CustomerSource} />
          <Route path='/sales/new/customer/:id' component={CustomerDetailsContainer} />
        </Switch>
      </div>
    </div>
  </div>
)

NewSale.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default NewSale