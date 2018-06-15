import React, { Component } from 'react'
import { NewAgreementLegalPerson, NewAgreementPhysicalPerson } from '../../agreements'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { fetchSale } from '../actions'
import PropTypes from 'prop-types'

class AgreementContainer extends Component {
  componentDidMount() {
    const { id: saleId } = this.props.match.params
    this.props.fetchSale(saleId)
  }

  render() {
    const { sale } = this.props
    return (
      this.props.agreementId ? <Redirect to='/agreements' /> :
        (
          <div>
            {sale.customer.type === 'PhysicalPerson' && <NewAgreementPhysicalPerson />}
            {sale.customer.type === 'LegalPerson' && <NewAgreementLegalPerson />}
          </div>
        )
    )
  }
}

AgreementContainer.propTypes = {
  fetchSale: PropTypes.func.isRequired,
  agreementId: PropTypes.string
}

const mapStateToProps = state => ({
  sale: state.salesPipeline.sale,
  agreementId: state.salesPipeline.sale.agreementId
})

const mapDispatchToProps = dispatch => ({
  fetchSale: saleId => dispatch(fetchSale(saleId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AgreementContainer)