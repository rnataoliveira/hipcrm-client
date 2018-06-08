import React from 'react'
import { connect } from 'react-redux'
import { fetchAgreements, filterAgreements } from '../actions'

import AgreementList from '../components/AgreementList'

const applyFilter = (contracts, q) => {
  return q ? contracts.filter(contract => contract.number != q) : contracts
}

const mapStateToProps = state => ({
  // customers: applyFilter(state.customers.all, state.customers.filter),
  contracts: applyFilter(state.contracts.all, state.contracts.filter),
  filter: state.contracts.filter
})

const mapDispatchToProps = dispatch => ({
  feetchAgreements: () => dispatch(fetchAgreements()),
  filterAgreements: q => dispatch(filterAgreements(q))
})

export default connect(mapStateToProps, mapDispatchToProps)(AgreementList)