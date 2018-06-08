import React from 'react'
import NewAgreementLegalPerson from './NewAgreementLegalPerson'
import NewAgreementPhysicalPerson from './NewAgreementPhysicalPerson'

this.state = {
  contractType: ''
}

const NewAgreement = props => {
  return (
    <div className="col-lg-12 mb-5 d-flex justify-content-center" >
      {
        this.state.contractType === '' &&
        <div className="d-flex justify-content-center">
          <button onClick={() => this.setState({ contractType: 'physical-person' })} type="button" className="btn btn-primary mt-5 align-self-center mr-5">Pessoa Física</button>
          <button onClick={() => this.setState({ contractType: 'legal-person' })} type="button" className="btn btn-primary mt-5 mr-2 align-self-center">Pessoa Jurídica</button>
        </div>
      }
      {this.state.customerType === 'physical-person' && <NewAgreementPhysicalPerson />}
      {this.state.customerType === 'legal-person' && <NewAgreementLegalPerson />}
    </div >
  )
}

export default NewAgreement