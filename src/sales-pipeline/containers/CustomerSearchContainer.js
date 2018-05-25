import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'

import { searchCustomers, customerSelected } from '../actions'

class CustomerSearchContainer extends Component {
  static propTypes = {
    searchCustomers: PropTypes.func.isRequired,
    customerSelected: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired
  }

  state = { isLoading: false }

  render() {
    return (
      <AsyncTypeahead
        className='col-4'
        labelKey='name'
        placeholder='Buscar um cliente existente'
        isLoading={this.state.isLoading}
        onSearch={this.props.searchCustomers}
        onChange={this.props.customerSelected}
        options={this.props.customers}
      />
    )
  }
}

const mapStateToProps = state => ({
  customers: state.salesPipeline.new.customers
})

const mapDispatchToProps = dispatch => ({
  searchCustomers: q => dispatch(searchCustomers(q)),
  customerSelected: customer => {
    dispatch(customerSelected(customer[0]))
    dispatch(push(`/sales/new/customer/${customer[0].id}`))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerSearchContainer)