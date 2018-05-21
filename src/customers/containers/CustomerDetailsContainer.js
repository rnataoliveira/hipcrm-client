import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCustomer } from '../actions'
import CustomerDetailsComponent from '../customers/CustomerDetailsComponent'
import PersonFormDetails from '../customers/PersonFormDetails'
import LegalFormDetails from '../customers/LegalFormDetails'

class CustomerDetailsContainer extends Component {
  componentDidMount() {
    const { customerId } = this.props.match.params
    this.props.getCustomer(customerId, this.props.accessToken)
  }

  render() {
    return (
      <div>
        {this.props.customer &&
          (this.props.customer.type === 'PhysicalPerson' ?
            <PersonFormDetails customer={this.props.customer} />
            :
            <LegalFormDetails customer={this.props.customer} />
          )}
      </div>
    )
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