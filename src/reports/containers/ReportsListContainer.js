import React from 'react'
import { connect } from 'react-redux'
import { fetchReports, filterReports } from '../actions'

import ReportsList from '../components/ReportsList'

const applyFilter = (reports, q) => {
  return q ? reports.filter(report => report.id != q) : reports
}

const mapStateToProps = state => ({
  reports: applyFilter(state.contracts.all, state.contracts.filter),
  filter: state.contracts.filter
})

const mapDispatchToProps = dispatch => ({
  fetchReports: () => dispatch(fetchReports()),
  filterReports: q => dispatch(filterReports(q))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReportsList)