import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchCustomer, createSale, messageShowed, createSaleFailDisplay } from '../actions'
import { Redirect } from 'react-router'
import { CustomerDetails } from '../../customers'
import { Link } from 'react-router-dom'
import { flashMessage } from '../../flash-messages/actions'

class CustomerDetailsContainer extends Component {
  static propTypes = {
    customer: PropTypes.object,
  }

  componentDidMount() {
    const { id: customerId } = this.props.match.params
    this.props.fetchCustomer(customerId)
  }

  handleNewSale(event) {
    event.preventDefault()
    this.props.createSale(this.props.customer.id)
  }

  componentWillUnmount() {
    this.props.saleId && this.props.displaySuccess()
    this.props.errors && this.props.displayError(window.scrollTo(0, 0))
  }

  render() {
    const display = () => (
      <div>
        <CustomerDetails customer={this.props.customer} />
        <div className="col-12 text-right">
          <Link to="/sales/new" className="btn btn-primary mb-5 mr-2">Voltar</Link>
          <button onClick={this.handleNewSale.bind(this)} className="btn btn-primary mb-5">Iniciar Venda</button>
        </div>
      </div>
    )

    if(this.props.errors && this.props.errors.length > 0)
      return <Redirect to='/sales/new' />

    return this.props.saleId ? <Redirect to={`/sales/${this.props.saleId}`} /> :
      this.props.customer && this.props.customer.id ? display() : null
  }
}

const mapStateToProps = state => ({
  customer: state.salesPipeline.new.customer,
  saleId: state.salesPipeline.new.saleId,
  errors: state.salesPipeline.new.errors
})

const mapDispatchToProps = dispatch => ({
  fetchCustomer: customerId => dispatch(fetchCustomer(customerId)),
  createSale: customerId => dispatch(createSale({ customerId })),
  displayError: () => {
    dispatch(flashMessage({ text: 'Cliente já possui venda ativa!', type: 'error' }))
    dispatch(createSaleFailDisplay())
  },
  displaySuccess: () => dispatch(flashMessage({ text: 'Venda Criada!' })),
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetailsContainer)
