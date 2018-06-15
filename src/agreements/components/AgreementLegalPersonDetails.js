import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class AgreementLegalPersonDetails extends Component {
  constructor(props) {
    super(props)
  }

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
            <p className="form-control">{this.props.agreement.number ? this.props.agreement.number : <br />}</p>
          </div>
        </div>
        <hr />

        <h5 className="h5 mt-4">Informações de Contato do Endereço de Correspondência</h5>
        <div className="row mt-2">
          <div className="col-sm-1">
            <label htmlFor="phoneAreaCode">DDD</label>
            <p className="form-control">{this.props.agreement.personalData.phone.areaCode ? this.props.agreement.personalData.phone.areaCode : <br />}</p>
          </div>
          <div className="col-sm-2">
            <label htmlFor="phoneNumber">Telefone</label>
            <p className="form-control">{this.props.agreement.personalData.phone.number ? this.props.agreement.personalData.phone.number : <br />}</p>
          </div>
          <div className="col-sm-4">
            <label htmlFor="email">E-mail</label>
            <p className="form-control">{this.props.agreement.personalData.email ? this.props.agreement.personalData.email : <br />}</p>
          </div>
          <div className="col-sm-5">
            <label htmlFor="contact">Contato da Empresa</label>
            <p className="form-control">{this.props.agreement.personalData.contact ? this.props.agreement.personalData.contact : <br />}</p>
          </div>
        </div>

        <h5 className="h5 mt-4">Endereço de Correspondência </h5>
        <span className="span" >Endereço para entrega de fatura e carteirinhas</span>
        <div className="row mt-2">
          <div className="col-sm-2">
            <label htmlFor="zipCode">Cep</label>
            <p className="form-control">{this.props.agreement.personalData.mailingAddress.zipCode ? this.props.agreement.personalData.mailingAddress.zipCode : <br />}</p>
          </div>
          <div className="col-sm-8">
            <label htmlFor="street">Logradouro</label>
            <p className="form-control">{this.props.agreement.personalData.mailingAddress.street ? this.props.agreement.personalData.mailingAddress.street : <br />}</p>
          </div>
          <div className="col-sm-2">
            <label htmlFor="number">Número</label>
            <p className="form-control">{this.props.agreement.personalData.mailingAddress.number ? this.props.agreement.personalData.mailingAddress.number : <br />}</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-2">
            <label htmlFor="complement">Complemento</label>
            <p className="form-control">{this.props.agreement.personalData.mailingAddress.complement ? this.props.agreement.personalData.mailingAddress.complement : <br />}</p>
          </div>
          <div className="col-sm-4">
            <label htmlFor="neighborhood">Bairro</label>
            <p className="form-control">{this.props.agreement.personalData.mailingAddress.neighboorhod ? this.props.agreement.personalData.mailingAddress.neighboorhod : <br />}</p>
          </div>
          <div className="col-sm-4">
            <label htmlFor="city">Cidade</label>
            <p className="form-control">{this.props.agreement.personalData.mailingAddress.city ? this.props.agreement.personalData.mailingAddress.city : <br />}</p>
          </div>
          <div className="col-sm-2">
            <label htmlFor="state">Estado</label>
            <p className="form-control">{this.props.agreement.personalData.mailingAddress.state ? this.props.agreement.personalData.mailingAddress.state : <br />}</p>
          </div>

          <h5 className="h5 mt-4 ml-3">Beneficiários por plano</h5>
          <div className="col-12">
            {this.props.agreement.personalData.beneficiaries.map((b, index) => (
              <div className="row mt-2" key={index}>
                <div className="col-sm-4">
                  <label htmlFor="beneficiariesNumber" name="number">Número</label>
                  <p className="form-control">{b.number ? b.number : <br />}</p>
                </div>
                <div className="col-sm-8">
                  <label htmlFor="beneficiariesPlan" name="plan">Plano</label>
                  <p className="form-control">{b.plan ? b.plan : <br />}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h5 className="h5 mt-4">Modalidade</h5>
        <div className="row mt-2">
          <div className="col-sm-4">
            <p className="form-control">{this.props.agreement.personalData.modality === 0 ? 'Sem Participação' : 'Com Participação'}</p>
          </div>
        </div>
        <h5 className="h5 mt-4">Contratação de Assistência Odontológica</h5>
        <div className="row mt-2">
          <div className="col-sm-2">
            <label htmlFor="dentalCarePlan">Contratou?</label>
            <p className="form-control">{this.props.agreement.personalData.dentalCare === 0 ? 'Não' : 'Sim'}</p>
          </div>
          {this.props.agreement.personalData.dentalCare.has && (
            <div className="col-sm-10">
              <label htmlFor="dentalCarePlan">Qual?</label>
              <p className="form-control">{this.props.agreement.personalData.dentalCare.plan ? this.props.agreement.personalData.dentalCare.plan : <br />}</p>
            </div>
          )}
        </div>
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
            {/* (valor total - entrada) / parcelas*/}
            <label htmlFor="installmentValue">Parcela</label>
            <p className="form-control">{installmentValue}</p>
          </div>
          <div className="col-sm-3">
            <label htmlFor="comission">Comissão</label>
            <p className="form-control">{this.props.agreement.payment.comission ? this.props.agreement.payment.comission : <br />}</p>
          </div>
        </div>
        <h5 className="h5 mt-4">Observações</h5>
        <div className="row mt-2">
          <div className="col-sm-12">
            <p className="form-control">{this.props.agreement.notes ? this.props.agreement.notes : <br />}</p>
          </div>
        </div>
        <Link to="/agreements" className="btn btn-primary mt-4 mr-2 mb-5 float-right">Voltar</Link>
      </div>
    )
  }
}

AgreementLegalPersonDetails.propTypes = {
  agreement: PropTypes.object,
}

export default AgreementLegalPersonDetails