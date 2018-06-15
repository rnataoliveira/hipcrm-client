import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LegalPersonAgreementDetails extends Component {
  render() {
    const installmentValue = (this.props.agreement.payment.totalValue - this.props.agreement.payment.entranceFee) / this.props.agreement.payment.installmentsCount
    console.log(installmentValue)
    return (
      <div className="mt-2">
        <h2 className="h2">Contrato - Pessoa Juridíca</h2>
        <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-start " />
        <div className="row">
          <div className="col-sm-4">
            <label htmlFor="agreementNumber">Número do Contrato</label>
            <p className="form-control">{this.props.agreement.agreementNumber}</p>
          </div>
        </div>
        <hr />

        <h5 className="h5 mt-4">Informações de Contato do Endereço de Correspondência</h5>
        <div className="row mt-2">
          <div className="col-sm-1">
            <label htmlFor="phoneAreaCode">DDD</label>
            <p className="form-control">{this.props.agreement.phone.areaCode}</p>
          </div>
          <div className="col-sm-2">
            <label htmlFor="phoneNumber">Telefone</label>
            <p className="form-control">{this.props.agreement.phone.number}</p>
          </div>
          <div className="col-sm-4">
            <label htmlFor="email">E-mail</label>
            <p className="form-control">{this.props.agreement.email}</p>
          </div>
          <div className="col-sm-5">
            <label htmlFor="companyContact">Contato da Empresa</label>
            <p className="form-control">{this.props.agreement.companyContact}</p>
          </div>
        </div>

        <h5 className="h5 mt-4">Endereço de Correspondência </h5>
        <span className="span" >Endereço para entrega de fatura e carteirinhas</span>
        <div className="row mt-2">
          <div className="col-sm-2">
            <label htmlFor="zipCode">Cep</label>
            <p className="form-control">{this.props.agreement.mailingAddress.zipCode}</p>
          </div>
          <div className="col-sm-8">
            <label htmlFor="street">Logradouro</label>
            <p className="form-control">{this.props.agreement.mailingAddress.street}</p>
          </div>
          <div className="col-sm-2">
            <label htmlFor="number">Número</label>
            <p className="form-control">{this.props.agreement.mailingAddress.number}</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-2">
            <label htmlFor="complement">Complemento</label>
            <p className="form-control">{this.props.agreement.mailingAddress.complement}</p>
          </div>
          <div className="col-sm-4">
            <label htmlFor="neighborhood">Bairro</label>
            <p className="form-control">{this.props.agreement.mailingAddress.neighborhood}</p>
          </div>
          <div className="col-sm-4">
            <label htmlFor="city">Cidade</label>
            <p className="form-control">{this.props.agreement.mailingAddress.city}</p>
          </div>
          <div className="col-sm-2">
            <label htmlFor="state">Estado</label>
            <p className="custom-select">{this.props.agreement.mailingAddress.state}</p>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-12">
            <label htmlFor="reference">Referência</label>
            <p className="form-control">{this.props.agreement.mailingAddress.reference}</p>
          </div>
        </div>

        <h5 className="h5 mt-4">Beneficiários por plano</h5>
        {this.props.agreement.beneficiaries.map((b, index) => (
          <div className="row mt-2" key={index}>
            <div className="col-sm-4">
              <label htmlFor="beneficiariesNumber">Número</label>
              <p className="form-control">{b.number}</p>
            </div>
            <div className="col-sm-8">
              <label htmlFor="beneficiariesPlan">Plano</label>
              <p className="form-control">{b.plan}</p>
            </div>
          </div>
        ))}
        <div className="row mt-2 d-flex justify-content-end">
          <div className="col-sm-2">
            <button onClick={this.handleAddMoreBeneficiaries.bind(this)} type="button" className="btn btn-primary float-right">Adicionar Beneficiários</button>
          </div>
        </div>

        <h5 className="h5 mt-4">Modalidade</h5>
        <div className="row mt-2">
          <div className="form-check form-check-inline m-2">
            <label htmlFor="modality">Modalidade</label>
            <p className="form-control">{this.props.agreement.modality}</p>
          </div>
        </div>
        <h5 className="h5 mt-4">Contratação de Assistência Odontológica</h5>
        <div className="row mt-2">
          <div className="col-sm-12">
            <label htmlFor="whichDentalCare">Qual?</label>
            <p className="form-control">{this.props.agreement.dentalCar ? this.props.agreement.whichDentalCare : <br />}</p>
          </div>
        </div>
        <h5 className="h5 mt-4">Controle de Pagamento do Contrato</h5>
        <div className="row mt-2">
          <div className="col-sm-2">
            <label htmlFor="totalValue">Total</label>
            <p className="form-control">{this.props.agreement.payment.totalValue}</p>
          </div>
          <div className="col-sm-2">
            <label htmlFor="entranceFee">Entrada</label>
            <p className="form-control">{this.props.agreement.payment.entranceFee}</p>
          </div>
          <div className="col-sm-3">
            <label htmlFor="installmentAmount">Quantidade</label>
            <p className="custom-select">{this.props.agreement.payment.installmentAmount}</p>
          </div>
          <div className="col-sm-2">
            {/* (valor total - entrada) / parcelas*/}
            <label htmlFor="installmentValue">Parcela</label>
            <p className="form-control">{installmentValue}</p>
          </div>
          <div className="col-sm-3">
            <label htmlFor="comission">Comissão</label>
            <p className="form-control">{this.props.agreement.payment.comission}</p>
          </div>
        </div>
        <h5 className="h5 mt-4">Observações</h5>
        <div className="row mt-2">
          <div className="col-sm-12">
            <p className="form-control" id="exampleFormControlTextarea1" rows="3">{this.props.agreement.notes}</p>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-5 float-right">Salvar</button>
      </div>
    )
  }
}

LegalPersonAgreementDetails.propTypes = {
  agreement: PropTypes.object
}

export default LegalPersonAgreementDetails