import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchCustomer, createSale } from '../actions'
import { Redirect } from 'react-router'
import { CustomerDetails } from '../../customers'
import { Alert } from '../../layout'

class CustomerDetailsContainer extends Component {
  static propTypes = {
    customer: PropTypes.object
  }

  componentDidMount() {
    const { id: customerId } = this.props.match.params
    this.props.fetchCustomer(customerId)
  }

  handleNewSale() {
    this.props.createSale(this.props.customer.id)
  }

  render() {
    const display = () => (
      <div>
        {this.props.errors &&
          <Alert type="danger" heading="Ops!">
            <ul>
              {Object.keys(this.props.errors).map(key =>
                this.props.errors[key].map((errorMessage, index) => <li key={`${key}.${index}`}>{errorMessage}</li>))}
            </ul>
          </Alert>}
        <CustomerDetails customer={this.props.customer} />
        <div className="col-12 text-right">
          <button onClick={this.handleNewSale.bind(this)} className="btn btn-primary">Iniciar Venda</button>
        </div>
      </div>
    )
    return this.props.saleId ? <Redirect to={`/sales/${this.props.saleId}`} /> :
      this.props.customer && this.props.customer.id ? display() : null
  }
}

const mapStateToProps = state => ({
  customer: state.customers.customer,
  saleId: state.salesPipeline.new.saleId,
  errors: state.salesPipeline.new.errors
})

const mapDispatchToProps = dispatch => ({
  fetchCustomer: customerId => dispatch(fetchCustomer(customerId)),
  createSale: customerId => dispatch(createSale({ customerId }))
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetailsContainer)
