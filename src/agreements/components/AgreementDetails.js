import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AgreementPhysicalPersonDetails from './AgreementPhysicalPersonDetails'
import AgreementLegalPersonDetails from './AgreementLegalPersonDetails'

class AgreementDetails extends Component {
  render() {
    return (
      <div>
        {this.props.agreement.sale.customer.type === 'PhysicalPerson' && <AgreementPhysicalPersonDetails agreement={this.props.agreement} />}
        {this.props.agreement.sale.customer.type === 'LegalPerson' && <AgreementLegalPersonDetails agreement={this.props.agreement} />}
      </div >
    )
  }
}

AgreementDetails.propTypes = {
  agreement: PropTypes.object.isRequired,
  fetchAgreement: PropTypes.func,
  match: PropTypes.object
}

export default AgreementDetails