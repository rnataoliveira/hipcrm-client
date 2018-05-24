import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchCustomer, createSale } from '../actions'
import { Redirect } from 'react-router'
import { CustomerDetails } from '../../customers'

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
      <CustomerDetails customer={this.props.customer}>
        <div className="col-12 text-right">
          <button onClick={this.handleNewSale.bind(this)} className="btn btn-primary">Iniciar Venda</button>
        </div>
      </CustomerDetails>
    )
    return this.props.saleId ? <Redirect to={`/sales/${this.props.saleId}`} /> :
      this.props.customer ? display() : null
  }
}

const mapStateToProps = state => ({
  customer: state.salesPipeline.new.customer,
  saleId: state.salesPipeline.new.saleId
})

const mapDispatchToProps = dispatch => ({
  fetchCustomer: customerId => dispatch(fetchCustomer(customerId)),
  createSale: customerId => dispatch(createSale({ customerId }))
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetailsContainer)
