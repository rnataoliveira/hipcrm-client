import React from 'react'
import { connect } from 'react-redux'
import { fetchAgreements, filterAgreements } from '../actions'

import AgreementList from '../components/AgreementList'

const applyFilter = (agreement, q) => {
  return q ? this.props.agreements.filter(agreement => agreement.number !== q) : agreement
}

const mapStateToProps = state => ({
  // customers: applyFilter(state.customers.all, state.customers.filter),
  agreements: applyFilter(state.agreements.all, state.agreements.filter),
  filter: state.agreements.filter
})

const mapDispatchToProps = dispatch => ({
  feetchAgreements: () => dispatch(fetchAgreements()),
  filterAgreements: q => dispatch(filterAgreements(q))
})

export default connect(mapStateToProps, mapDispatchToProps)(AgreementList)