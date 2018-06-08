import React, { Component } from 'react'
import { NewAgreementLegalPerson, NewAgreementPhysicalPerson } from '../../agreements'
import { connect } from 'react-redux'
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
      <div>
        {sale.customer.type === 'PhysicalPerson' && <NewAgreementPhysicalPerson />}
        {sale.customer.type === 'LegalPerson' && <NewAgreementLegalPerson />}
      </div>
    )
  }
}

AgreementContainer.propTypes = {
  fetchSale: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  sale: state.salesPipeline.sale
})

const mapDispatchToProps = dispatch => ({
  fetchSale: saleId => dispatch(fetchSale(saleId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AgreementContainer)