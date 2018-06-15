import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class AgreementPhysicalPersonDetails extends Component {

  componentDidMount() {
    this.props.fetchAgreement()
  }

  render() {
    return (
      <div className="mt-2">
        <h2 className="h2">Contrato - Pessoa Fisíca</h2>
        <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-start " />
        <div className="row">
          <div className="col-sm-4">
            <label htmlFor="agreementNumber">Número do Contrato</label>
            <p className="form-control" >{this.props.agreement.number}</p>
          </div>
        </div>
        <hr />

        <h5 className="h5 mt-4">Dados do Plano</h5>
        <div className="row">
          <div className="col-sm-8">
            <label htmlFor="plan">Plano</label>
            <p className="form-control">{this.props.agreement.plan}</p>
          </div>
          <div className="col-sm-2">
            <label htmlFor="phoneAreaCode">DDD</label>
            <p className="form-control">{this.props.agreement.phone.areaCode}</p>
          </div>
          <div className="col-sm-2">
            <label htmlFor="phoneNumber">Telefone</label>
            <p className="form-control" >{this.props.agreement.phone.number}</p>
          </div>
        </div>

        <h5 className="h5 mt-4">Dependentes</h5>
        {this.props.agreement.dependents.map((d, index) => (
          <div className="mt-2" key={index}>
            <div className="row mt-2">
              <div className="col-sm-6">
                <label htmlFor="dependentName">Nome</label>
                <p className="form-control" >{d.name}</p>
              </div>
              <div className="col-sm-2">
                <label htmlFor="dependentDocumentNumber">Cpf</label>
                <p className="form-control" >{d.documentNumber}</p>
              </div>
              <div className="col-sm-2">
                <label htmlFor="dependentGeneralRegistration">Rg</label>
                <p className="form-control" >{d.generalRegistration}</p>
              </div>
              <div className="col-sm-2">
                <label htmlFor="dependentBirthDate">Data de Nascimento</label>
                <p className="form-control" >{d.birthDate}</p>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-sm-7">
                <label htmlFor="dependentMothersName">Nome da Mãe</label>
                <p className="form-control" >{d.mothersName}</p>
              </div>
              <div className="col-sm-2">
                <label htmlFor="dependentMaritalState">Estado Civil</label>
                <p className="form-control">{d.maritalState}</p>
              </div>
              <div className="col-sm-3">
                <label htmlFor="dependentRelationship">Parentesco</label>
                <p className="form-control" >{d.relationship}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="row mt-2">
          <div className="col-sm-12">
            <button type="button" className="btn btn-primary float-right">Mais Dependentes</button>
          </div>
        </div>

        <h5 className="h5 mt-4">Controle de Pagamento do Contrato</h5>
        <div className="row mt-2">
          <div className="col-sm-2">
            <label htmlFor="totalValue">Total</label>
            <p className="form-control">{this.props.agreement.totalValue}</p>
          </div>
          <div className="col-sm-2">
            <label htmlFor="entranceFee">Entrada</label>
            <p className="form-control">{this.props.agreement.entranceFee}</p>
          </div>
          <div className="col-sm-3">
            <label htmlFor="installmentAmount">Quantidade</label>
            <p className="form-control">{this.props.agreement.installmentAmount}</p>
          </div>
          <div className="col-sm-2">
            <label htmlFor="amountValue">Parcela</label>
            <p className="form-control">{this.props.agreement.amountValue}</p>
          </div>
          <div className="col-sm-3">
            <label htmlFor="comission">Comissão</label>
            <p className="form-control">{this.props.agreement.comission}</p>
          </div>
        </div>
        <h5 className="h5 mt-4">Observações</h5>
        <div className="row mt-2">
          <div className="col-sm-12">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" >{this.props.agreement.notes}</textarea>
          </div>
        </div>
        <Link to="/agreements" className="btn btn-primary mt-5 float-right">Voltar</Link>
      </div>
    )
  }
}

AgreementPhysicalPersonDetails.propTypes = {
  agreement: PropTypes.object,
  fetchAgreement: PropTypes.func.isRequired,
}

export default AgreementPhysicalPersonDetails