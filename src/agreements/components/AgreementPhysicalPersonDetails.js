import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class AgreementPhysicalPersonDetails extends Component {
  render() {
    return (
      <div className="mt-2">
        <h2 className="h2">Contrato - Pessoa Fisíca</h2>
        <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-start " />
        <div className="row">
          <div className="col-sm-4">
            <label htmlFor="agreementNumber">Número do Contrato</label>
            <p className="form-control" >{this.props.agreement.number ? this.props.agreement.number : <br />}</p>
          </div>
        </div>
        <hr />

        <h5 className="h5 mt-4">Dados do Plano</h5>
        <div className="row">
          <div className="col-sm-12">
            <label htmlFor="plan">Plano</label>
            <p className="form-control">{this.props.agreement.personalData.plan ? this.props.agreement.personalData.plan : <br />}</p>
          </div>
        </div>

        <h5 className="h5 mt-4">Dependentes</h5>
        {this.props.agreement.personalData.dependents.map((d, index) => (
          <div className="mt-2" key={index}>
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="dependentName">Nome</label>
                <p className="form-control" >{d.name ? d.name : <br />}</p>
              </div>
              <div className="col-sm-4">
                <label htmlFor="dependentDocumentNumber">Cpf</label>
                <p className="form-control" >{d.documentNumber ? d.documentNumber : <br />}</p>
              </div>
              <div className="col-sm-2">
                <label htmlFor="dependentGeneralRegistration">Rg</label>
                <p className="form-control" >{d.generalRegistration ? d.generalRegistration : <br />}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <label htmlFor="dependentBirthDate">Data de Nascimento</label>
                <p className="form-control" >{d.birthDate ? d.birthDate : <br />}</p>
              </div>
              <div className="col-sm-4">
                <label htmlFor="dependentMothersName">Nome da Mãe</label>
                <p className="form-control" >{d.mothersName ? d.mothersName : <br />}</p>
              </div>
              <div className="col-sm-2">
                <label htmlFor="dependentMaritalState">Estado Civil</label>
                <p className="form-control">{d.maritalState ? d.maritalState : <br />}</p>
              </div>
              <div className="col-sm-2">
                <label htmlFor="dependentRelationship">Parentesco</label>
                <p className="form-control" >{d.relationship ? d.relationship : <br />}</p>
              </div>
            </div>
          </div>
        ))}

        <h5 className="h5 mt-4">Controle de Pagamento do Contrato</h5>
        <div className="row mt-2">
          <div className="col-sm-2">
            <label htmlFor="totalValue">Total</label>
            <p className="form-control">{this.props.agreement.payment.totalValue ? this.props.agreement.payment.totalValue : <br />}</p>
          </div>
          <div className="col-sm-2">
            <label htmlFor="entranceFee">Entrada</label>
            <p className="form-control">{this.props.agreement.payment.entranceFee ? this.props.agreement.payment.entranceFee : <br />}</p>
          </div>
          <div className="col-sm-3">
            <label htmlFor="installmentAmount">Quantidade</label>
            <p className="form-control">{this.props.agreement.payment.installmentsCount ? this.props.agreement.payment.installmentsCount : <br />}</p>
          </div>
          <div className="col-sm-2">
            <label htmlFor="amountValue">Parcela</label>
            <p className="form-control"><br /></p>
          </div>
          <div className="col-sm-3">
            <label htmlFor="comission">Comissão</label>
            <p className="form-control">{this.props.agreement.payment.comission ? this.props.agreement.payment.comission : <br />}</p>
          </div>
        </div>
        <h5 className="h5 mt-4">Observações</h5>
        <div className="row mt-2">
          <div className="col-sm-12">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" >{this.props.agreement.notes ? this.props.agreement.notes : <br />}</textarea>
          </div>
        </div>
        <Link to="/agreements" className="btn btn-primary mt-4 mr-2 mb-5 float-right">Voltar</Link>
      </div>
    )
  }
}

AgreementPhysicalPersonDetails.propTypes = {
  agreement: PropTypes.object
}

export default AgreementPhysicalPersonDetails