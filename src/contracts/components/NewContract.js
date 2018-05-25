import React from 'react'
import NewContractPhysicalPerson from './NewContractPhysicalPerson'
import NewContractLegalPerson from './NewContractLegalPerson'

this.state = {
  contractType: ''
}

const NewContract = props => {
  return (
    <div className="col-lg-12 mb-5 d-flex justify-content-center" >
      {
        this.state.contractType === '' &&
        <div className="d-flex justify-content-center">
          <button onClick={() => this.setState({ contractType: 'physical-person' })} type="button" className="btn btn-primary mt-5 align-self-center mr-5">Pessoa Física</button>
          <button onClick={() => this.setState({ contractType: 'legal-person' })} type="button" className="btn btn-primary mt-5 mr-2 align-self-center">Pessoa Jurídica</button>
        </div>
      }
      {this.state.customerType === 'physical-person' && <NewContractPhysicalPerson />}
      {this.state.customerType === 'legal-person' && <NewContractLegalPerson />}
    </div >
  )
}

export default NewContract