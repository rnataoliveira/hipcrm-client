import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAgreement } from '../actions'

import AgreementDetails from '../components/AgreementDetails'

class AgreementDetailsContainer extends Component {

  componentDidMount() {
    const { id: agreementId } = this.props.match.params
    this.props.fetchAgreement(agreementId)
  }

  render() {
    return (
      this.props.agreement.id ?
        <AgreementDetails agreement={this.props.agreement} /> : null
    )
  }
}

AgreementDetailsContainer.propTypes = {
  agreement: PropTypes.object,
}

const mapStateToProps = state => ({
  agreement: state.agreements.agreement
})

const mapDispatchToProps = dispatch => ({
  fetchAgreement: agreementId => dispatch(fetchAgreement(agreementId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AgreementDetailsContainer)
