import React, { Component } from 'react'

class NewAgreementLegalPerson extends Component {
  state = {
    contractNumber: '',
    phone: {
      areaCode: '',
      number: '',
    },
    email: '',
    companyContact: '',
    address: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      reference: '',
    },
    beneficiaries: [],
    modality: '',
    dentalCare: '',
    whichDentalCare: '',
    comission: '',
    totalValue: '',
    entranceFee: '',
    installmentAmount: '',
    amountValue: '',
    notes: ''
  }

  handleAddMoreBeneficiaries(event) {
    this.setState({
      beneficiaries: [...this.state.beneficiaries, { plan: null, number: null }]
    })
  }

  render() {
    return (
      <form className="mt-2">
        <h2 className="h2">Contrato - Pessoa Juridíca</h2>
        <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-start " />
        <div className="row">
          <div className="col-sm-4">
            <label htmlFor="contractNumber">Número do Contrato</label>
            <input type="text" className="form-control" placeholder="Número do Contrato" />
          </div>
        </div>
        <hr />
        {/* <h5 className="h5 mt-4">Dados da Plataforma</h5>
        <div className="row">
          <div className="col-sm-4">
            <input type="text" className="form-control" placeholder="Concessionário" />
          </div>
          <div className="col-sm-2">
            <input type="text" className="form-control" placeholder="CPF do Corretor" />
          </div>
          <div className="col-sm-6">
            <input type="text" className="form-control" placeholder="Nome do Corretor" />
          </div>
        </div> */}
        {/* <div className="row mt-2">
          <div className="col-sm-2">
            <input type="text" className="form-control" placeholder="DDD" />
          </div>
          <div className="col-sm-4">
            <input type="text" className="form-control" placeholder="Celular" />
          </div>
          <div className="col-sm-6">
            <input type="text" className="form-control" placeholder="E-mail" />
          </div>
        </div> */}

        <h5 className="h5 mt-4">Informações de Contato do Endereço de Correspondência</h5>
        <div className="row mt-2">
          <div className="col-sm-1">
            <label htmlFor="phoneAreaCode">DDD</label>
            <input type="text" className="form-control" placeholder="DDD" value={this.state.phone.areaCode} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="phoneNumber">Telefone</label>
            <input type="text" className="form-control" placeholder="Telefone" value={this.state.phone.number} />
          </div>
          <div className="col-sm-4">
            <label htmlFor="email">E-mail</label>
            <input type="text" className="form-control" placeholder="E-mail" value={this.state.email} />
          </div>
          <div className="col-sm-5">
            <label htmlFor="companyContact">Contato da Empresa</label>
            <input type="text" className="form-control" placeholder="Contato da Empresa" value={this.state.companyContact} />
          </div>
        </div>

        <h5 className="h5 mt-4">Endereço de Correspondência </h5>
        <span className="span" >Endereço para entrega de fatura e carteirinhas</span>
        <div className="row mt-2">
          <div className="col-sm-2">
            <label htmlFor="zipCode">Cep</label>
            <input type="text" className="form-control" placeholder="Cep" value={this.state.address.zipCode} />
          </div>
          <div className="col-sm-8">
            <label htmlFor="street">Logradouro</label>
            <input type="text" className="form-control" placeholder="Logradouro" value={this.state.address.street} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="number">Número</label>
            <input type="text" className="form-control" placeholder="Numero" value={this.state.address.number} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-2">
            <label htmlFor="complement">Complemento</label>
            <input type="text" className="form-control" placeholder="Complemento" value={this.state.address.complement} />
          </div>
          <div className="col-sm-4">
            <label htmlFor="neighborhood">Bairro</label>
            <input type="text" className="form-control" placeholder="Bairro" value={this.state.address.neighborhood} />
          </div>
          <div className="col-sm-4">
            <label htmlFor="city">Cidade</label>
            <input type="text" className="form-control" placeholder="Cidade" value={this.state.address.city} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="state">Estado</label>
            <select className="custom-select" value={this.state.address.state}>
              <option value="UF">Estado</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-12">
            <label htmlFor="reference">Referência</label>
            <input type="text" className="form-control" placeholder="Ponto de Referência" value={this.state.address.reference} />
          </div>
        </div>

        <h5 className="h5 mt-4">Beneficiários por plano</h5>
        {this.state.beneficiaries.map((b, index) => (
          <div className="row mt-2">
            <div className="col-sm-4" key={index}>
              <label htmlFor="beneficiariesNumber">Número</label>
              <input value={b.number} type="text" className="form-control" placeholder="Número de Beneficiário" />
            </div>
            <div className="col-sm-8">
              <label htmlFor="beneficiariesPlan">Plano</label>
              <input value={b.plan} type="text" className="form-control" placeholder="Plano" />
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
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value={this.state.modality} />
            <label className="form-check-label">
              Com Participação
            </label>
          </div>
          <div className="form-check form-check-inline m-2">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value={this.state.modality} />
            <label className="form-check-label">
              Sem Participação
            </label>
          </div>
        </div>
        <h5 className="h5 mt-4">Contratação de Assistência Odontológica</h5>
        <div className="row mt-2">
          <div className="form-check form-check-inline m-2">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value={this.state.dentalCare} />
            <label className="form-check-label">
              Sim
            </label>
          </div>
          <div className="form-check form-check-inline m-2">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value={this.state.dentalCare} />
            <label className="form-check-label">
              Não
            </label>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-12">
            <label htmlFor="whichDentalCare">Qual?</label>
            <input type="text" className="form-control" placeholder="Qual?" value={this.state.whichDentalCare} />
          </div>
        </div>
        <h5 className="h5 mt-4">Controle de Pagamento do Contrato</h5>
        <div className="row mt-2">
          <div className="col-sm-2">
            <label htmlFor="totalValue">Total</label>
            <input type="text" className="form-control" placeholder="Valor Total do Plano" value={this.state.totalValue} />
          </div>
          <div className="col-sm-2">
            <label htmlFor="entranceFee">Entrada</label>
            <input type="text" className="form-control" placeholder="Valor da Entrada" value={this.state.entranceFee} />
          </div>
          <div className="col-sm-3">
            <label htmlFor="installmentAmount">Quantidade</label>
            <select className="custom-select" value={this.state.installmentAmount}>
              <option value="parcelas">Quantidade de Parcelas</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="col-sm-2">
            {/* (valor total - entrada) / parcelas*/}
            <label htmlFor="amountValue">Parcela</label>
            <input type="text" className="form-control" placeholder="Valor da Parcela" value={this.state.amountValue} />
          </div>
          <div className="col-sm-3">
            <label htmlFor="comission">Comissão</label>
            <input type="text" className="form-control" placeholder="Valor da Comissão" value={this.state.comission} />
          </div>
        </div>
        <h5 className="h5 mt-4">Observações</h5>
        <div className="row mt-2">
          <div className="col-sm-12">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.notes}></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-5 float-right">Salvar</button>
      </form>

    )
  }
}

export default NewAgreementLegalPerson