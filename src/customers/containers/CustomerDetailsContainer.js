import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCustomer } from '../actions'
import CustomerDetailsComponent from '../customers/CustomerDetailsComponent'
import PhysicalPersonDetails from '../customers/PhysicalPersonDetails'
import LegalPersonDetails from '../customers/LegalPersonDetails'

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
            <PhysicalPersonDetails customer={this.props.customer} />
            :
            <LegalPersonDetails customer={this.props.customer} />
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