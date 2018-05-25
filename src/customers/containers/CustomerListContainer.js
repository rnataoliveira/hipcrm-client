import React from 'react'
import { connect } from 'react-redux'
import { fetchCustomers, filterCustomers } from '../actions'

import CustomerList from '../components/CustomerList'

const applyFilter = (customers, q) => {
  return q ? customers.filter(customer => customer.id != q) : customers
}

const mapStateToProps = state => ({
  customers: applyFilter(state.customers.all, state.customers.filter),
  filter: state.customers.filter
})

const mapDispatchToProps = dispatch => ({
  fetchCustomers: () => dispatch(fetchCustomers()),
  filterCustomers: q => dispatch(filterCustomers(q))
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList)