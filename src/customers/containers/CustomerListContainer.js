import React from 'react'
import { connect } from 'react-redux'
import { fetchCustomers, filterCustomers, deleteCustomer } from '../actions'

import CustomerList from '../components/CustomerList'

const applyFilter = (customers, q) => {
  return q ? customers.filter(customer => customer.personalData.documentNumber === q || customer.personalData.companyRegistration === q ||
    customer.personalData.firstName === q || customer.personalData.surname === q ||
    customer.personalData.firstName + ' ' + customer.personalData.surname === q ||
    customer.personalData.companyName === q) : customers
}

const mapStateToProps = state => ({
  customers: applyFilter(state.customers.all, state.customers.filter),
  filter: state.customers.filter
})

const mapDispatchToProps = dispatch => ({
  fetchCustomers: () => dispatch(fetchCustomers()),
  filterCustomers: q => dispatch(filterCustomers(q)),
  deleteCustomer: customerId => dispatch(deleteCustomer(customerId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList)