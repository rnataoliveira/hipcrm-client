import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCustomer } from '../actions'

class CustomerDetailsContainer extends Component {
  componentDidMount() {
    const { customerId } = this.props.match.params
    this.props.getCustomer(customerId, this.props.accessToken)
  }

  render() {
    return <h1>Customer Selecinado</h1>
  }
}

const mapStateToProps = state => ({
  accessToken: state.oidc.user && state.oidc.user.id_token,
  customer: state.customers.customerDetails
})

const mapDispatchToProps = dispatch => ({
  getCustomer: (customerId, accessToken) => dispatch(getCustomer(customerId, accessToken))
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetailsContainer)