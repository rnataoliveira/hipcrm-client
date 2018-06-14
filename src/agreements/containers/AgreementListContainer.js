import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAgreements, filterAgreements } from '../actions'
import { flashMessage } from '../../flash-messages/actions'
import AgreementList from '../components/AgreementList'
import PropTypes from 'prop-types'


const applyFilter = (agreements, q) => {
  return q ? this.props.agreements.filter(agreement => agreement.number === q) : agreements
}

const mapStateToProps = state => ({
  agreements: applyFilter(state.agreements.all, state.agreements.filter),
  filter: state.agreements.filter
})

const mapDispatchToProps = dispatch => ({
  fetchAgreements: () => dispatch(fetchAgreements()),
  filterAgreements: q => dispatch(filterAgreements(q)),
  displaySuccess: () => dispatch(flashMessage({ text: 'Dar Baixa executado com sucesso!' }))
})

AgreementList.propTypes = {
  agreements: PropTypes.array,
  filter: PropTypes.string,
  fetchAgreements: PropTypes.func.isRequired,
  filterAgreements: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(AgreementList)