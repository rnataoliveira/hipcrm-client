import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchCustomer, changeCustomerType } from '../actions'
import CustomerForm from '../components/CustomerForm'

class CustomerEditContainer extends Component {
  componentDidMount() {
    const { id: customerId } = this.props.match.params
    this.props.fetchCustomer(customerId)
  }

  render() {
    if (this.props.customer)
      return (
        <CustomerForm customer={this.props.customer}>
          <button type="submit" className="btn btn-primary mt-5 float-right">Salvar</button>
          <button type="button" className="btn btn-primary mt-5 mr-2 float-right">Voltar</button>
        </CustomerForm>)
    else return null
  }

}
CustomerEditContainer.propTypes = {
  customer: PropTypes.object,
  fetchCustomer: PropTypes.func.isRequired,
  changeCustomerType: PropTypes.func.isRequired,
  match: PropTypes.object
}

const mapStateToProps = state => ({
  customer: state.customers.customer
})

const mapDispatchToProps = dispatch => ({
  fetchCustomer: id => dispatch(fetchCustomer(id)),
  changeCustomerType: customerType => dispatch(changeCustomerType(customerType))
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerEditContainer)