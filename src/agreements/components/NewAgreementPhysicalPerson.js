import React, { Component } from 'react'

class NewAgreementPhysicalPerson extends Component {
  state = {
    contractNumber: '',
    plan: '',
    phone: {
      areaCode: '',
      number: ''
    },
    dependents: [],
    comission: '',
    totalValue: '',
    entranceFee: '',
    installmentAmount: '',
    amountValue: '',
    notes: ''
  }

  handleAddMoreDependents(event) {
    this.setState({
      dependents: [...this.state.dependent, {
        name: null, documentNumber: null, generalRegistration: null, birthDate: null,
        mothersName: null, maritalState: null, relationship: null
      }]
    })
  }

  render() {
    return (
      <form className="mt-2">
        <h2 className="h2">Contrato - Pessoa Fisíca</h2>
        <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-start " />
        <div className="row">
          <div className="col-sm-4">
            <label htmlFor="contractNumber">Número do Contrato</label>
            <input value={this.state.contractNumber} type="text" className="form-control" placeholder="Número do Contrato" />
          </div>
        </div>
        <hr />
        <h5 className="h5 mt-4">Dados do Plano</h5>
        <div className="row">
          <div className="col-sm-8">
            <label htmlFor="plan">Plano</label>
            <input value={this.state.plan} type="text" className="form-control" placeholder="Plano Contratado" />
          </div>
          <div className="col-sm-2">
            <label htmlFor="phoneAreaCode">DDD</label>
            <input value={this.state.phone.areaCode} type="text" className="form-control" placeholder="DDD" />
          </div>
          <div className="col-sm-2">
            <label htmlFor="phoneNumber">Telefone</label>
            <input value={this.state.phone.number} type="text" className="form-control" placeholder="Telefone do Plano" />
          </div>
        </div>

        <h5 className="h5 mt-4">Dependentes</h5>
        {this.state.dependents.map((d) => (
          <div className="mt-2">
            <div className="row mt-2">
              <div className="col-sm-6">
                <label htmlFor="dependentName">Nome</label>
                <input value={d.name} type="text" className="form-control" placeholder="Nome do Dependente" />
              </div>
              <div className="col-sm-2">
                <label htmlFor="dependentDocumentNumber">Cpf</label>
                <input value={d.documentNumber} type="text" className="form-control" placeholder="Cpf" />
              </div>
              <div className="col-sm-2">
                <label htmlFor="dependentGeneralRegistration">Rg</label>
                <input value={d.generalRegistration} type="text" className="form-control" placeholder="Rg" />
              </div>
              <div className="col-sm-2">
                <label htmlFor="dependentBirthDate">Data de Nascimento</label>
                <input value={d.birthDate} type="text" className="form-control" placeholder="DD/MM/AAAA" />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-sm-7">
                <label htmlFor="dependentMothersName">Nome da Mãe</label>
                <input value={d.mothersName} type="text" className="form-control" placeholder="Nome da Mãe" />
              </div>
              <div className="col-sm-2">
                <label htmlFor="dependentMaritalState">Estado Civil</label>
                <select className="custom-select" value={d.maritalState}>
                  <option selected>Estado Civil</option>
                  <option value="1">Solteiro</option>
                  <option value="2">União Estável</option>
                  <option value="3">Casado</option>
                  <option value="4">Divorciado</option>
                  <option value="5">Viúvo</option>
                </select>
              </div>
              <div className="col-sm-3">
                <label htmlFor="dependentRelationship">Parentesco</label>
                <input value={d.relationship} type="text" className="form-control" placeholder="Grau de Parentesco" />
              </div>
            </div>
          </div>
        ))}
        <div className="row mt-2">
          <div className="col-sm-12">
            <button onClick={this.handleAddMoreDependents.bind(this)} type="button" className="btn btn-primary float-right ">Mais Dependentes</button>
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
export default NewAgreementPhysicalPerson