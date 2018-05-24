import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router'
import { connect } from 'react-redux'
import { fetchSale } from '../actions'

import LinkContainer from './LinkContainer'
import Customer from './Customer'
import Appointments from './Appointments'
import Documents from './Documents'

class SalesPipeline extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    sale: PropTypes.object
  }

  componentDidMount() {
    const { id: saleId } = this.props.match.params
    this.props.fetchSale(saleId)
  }

  render() {
    const { match, location, sale } = this.props
    return sale && (
      <div className='row mt-5'>
        <div className="col-12">
          <h1>
            Processo de Vendas <small className="ml-2 text-muted">Venda - {this.props.sale.id}</small>
          </h1>
        </div>
        <div className='col-12'>
          <ul className="nav nav-tabs">
            <li className="nav-item col">
              <LinkContainer location={location} to={`${match.url}/customer`}>Cliente</LinkContainer>
            </li>
            <li className="nav-item col">
              <LinkContainer location={location} to={`${match.url}/appointments`}>Agendamentos</LinkContainer>
            </li>
            <li className="nav-item col">
              <LinkContainer location={location} to={`${match.url}/documents`}>Documentos</LinkContainer>
            </li>
            <li className="nav-item col">
              <LinkContainer location={location} to={`${match.url}/agreement`}>Contrato</LinkContainer>
            </li>
          </ul>
        </div>
        <div className="col-12">
          <Switch>
            <Route path="/sales/:id/customer" component={Customer} />
            <Route path="/sales/:id/appointments" component={Appointments} />
            <Route path="/sales/:id/documents" component={Documents} />
            <Redirect to={`${match.url}/customer`} />
          </Switch>
        </div>
      </div>
    ) || null
  }
}

const mapStateToProps = state => ({
  sale: state.salesPipeline.sale
})

const mapDispatchToProps = dispatch => ({
  fetchSale: saleId => dispatch(fetchSale(saleId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SalesPipeline)