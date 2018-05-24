import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchCustomer, createSale } from '../actions'
import { Redirect } from 'react-router'
import { CustomerDetails } from '../../customers'

class CustomerDetailsContainer extends Component {
  static propTypes = {
    customer: PropTypes.object.isRequired,
    oidc: PropTypes.object.isRequired
  }

  componentDidMount() {
    const { id: customerId } = this.props.match.params
    this.props.oidc && this.props.fetchCustomer(customerId, this.props.oidc)
  }

  handleNewSale() {
    this.props.createSale(this.props.customer.id, this.props.oidc)
  }

  render() {
    const display = (
      <CustomerDetails customer={this.props.customer}>
        <div className="col-12 text-right">
          <button onClick={this.handleNewSale.bind(this)} className="btn btn-primary">Iniciar Venda</button>
        </div>
      </CustomerDetails>
    )
    return this.props.saleId ? <Redirect to={`/sales/${this.props.saleId}`} /> : display
  }
}

const mapStateToProps = state => ({
  customer: state.salesPipeline.new.customer,
  saleId: state.salesPipeline.new.saleId,
  oidc: state.oidc.user
})

const mapDispatchToProps = dispatch => ({
  fetchCustomer: (customerId, oidc) => dispatch(fetchCustomer(customerId, oidc)),
  createSale: (customerId, oidc) => dispatch(createSale({ customerId }, oidc))
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetailsContainer)
