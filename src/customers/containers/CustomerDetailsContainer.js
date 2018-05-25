import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchCustomer } from '../actions'

import CustomerDetails from '../components/CustomerDetails'

class CustomerDetailsContainer extends Component {
  componentDidMount() {
    const { id: customerId } = this.props.match.params
    this.props.fetchCustomer(customerId)
  }

  render() {
    return (
      <CustomerDetails customer={this.props.customer} />
    )
  }
}

CustomerDetailsContainer.propTypes = {
  customer: PropTypes.object,
  fetchCustomer: PropTypes.func.isRequired,
  match: PropTypes.object
}

const mapStateToProps = state => ({
  customer: state.customers.customer
})

const mapDispatchToProps = dispatch => ({
  fetchCustomer: id => dispatch(fetchCustomer(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetailsContainer)