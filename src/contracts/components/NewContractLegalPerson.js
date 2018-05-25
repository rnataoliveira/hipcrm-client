import React, { Component } from 'react'

const NewContractLegalPerson = () => {
  return (
    <form className="mt-5">
      <h2 className="h2">Cadastrar Contrato - Pessoa Juridíca</h2>
      <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-start " />
      <div className="row">
        <div className="col-sm-4">
          <input type="text" className="form-control" placeholder="Número do Contrato" />
        </div>
      </div>
      <hr />
      <h5 className="h5 mt-4">Dados da Plataforma</h5>
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
      </div>
      <div className="row mt-2">
        <div className="col-sm-2">
          <input type="text" className="form-control" placeholder="DDD" />
        </div>
        <div className="col-sm-4">
          <input type="text" className="form-control" placeholder="Celular" />
        </div>
        <div className="col-sm-6">
          <input type="text" className="form-control" placeholder="E-mail" />
        </div>
      </div>

      <h5 className="h5 mt-4">Informações de Contato do Endereço de Correspondência</h5>
      <div className="row mt-2">
        <div className="col-sm-1">
          <input type="text" className="form-control" placeholder="DDD" />
        </div>
        <div className="col-sm-2">
          <input type="text" className="form-control" placeholder="Telefone" />
        </div>
        <div className="col-sm-4">
          <input type="text" className="form-control" placeholder="E-mail" />
        </div>
        <div className="col-sm-5">
          <input type="text" className="form-control" placeholder="Contato da Empresa" />
        </div>
      </div>

      <h5 className="h5 mt-4">Endereço de Correspondência </h5>
      <span className="span" >Endereço para entrega de fatura e carteirinhas</span>
      <div className="row mt-2">
        <div className="col-sm-2">
          <input type="text" className="form-control" placeholder="Cep" />
        </div>
        <div className="col-sm-8">
          <input type="text" className="form-control" placeholder="Logradouro" />
        </div>
        <div className="col-sm-2">
          <input type="text" className="form-control" placeholder="Numero" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-sm-2">
          <input type="text" className="form-control" placeholder="Complemento" />
        </div>
        <div className="col-sm-4">
          <input type="text" className="form-control" placeholder="Bairro" />
        </div>
        <div className="col-sm-4">
          <input type="text" className="form-control" placeholder="Cidade" />
        </div>
        <div className="col-sm-2">
          <select className="custom-select">
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
          <input type="text" className="form-control" placeholder="Ponto de Referência" />
        </div>
      </div>

      <h5 className="h5 mt-4">Beneficiários por plano</h5>
      <div className="row mt-2">
        <div className="col-sm-4">
          <input type="text" className="form-control" placeholder="Números de Beneficiário" />
        </div>
        <div className="col-sm-6">
          <input type="text" className="form-control" placeholder="Plano" />
        </div>
        <div className="col-sm-2">
          <button type="button" className="btn btn-primary float-right ">Mais Beneficiários</button>
        </div>
      </div>

      <h5 className="h5 mt-4">Modalidade</h5>
      <div className="row mt-2">
        <div class="form-check form-check-inline ml-3">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
          <label class="form-check-label" for="exampleRadios1">
            Com Participação
      </label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
          <label class="form-check-label" for="exampleRadios2">
            Sem Participação
      </label>
        </div>
      </div>
      <h5 className="h5 mt-4">Contratação de Assistência Odontológica</h5>
      <div className="row mt-2">
        <div class="form-check form-check-inline ml-3">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
          <label class="form-check-label" for="exampleRadios1">
            Sim
      </label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
          <label class="form-check-label" for="exampleRadios2">
            Não
      </label>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-12">
          <input type="text" className="form-control" placeholder="Qual?" />
        </div>
      </div>
      <h5 className="h5 mt-4">Controle de Pagamento do Contrato</h5>
      <div className="row mt-2">
        <div className="col-sm-3">
          <select className="custom-select">
            <option value="status">Status do Cliente</option>
            <option value="ativo">Ativo</option>
            <option value="inatio">Inativo</option>
          </select>
        </div>
        <div className="col-sm-2">
          <input type="text" className="form-control" placeholder="Valor Total Plano" />
        </div>
        <div className="col-sm-2">
          <input type="text" className="form-control" placeholder="Valor da Entrada" />
        </div>
        <div className="col-sm-3">
          <select className="custom-select">
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
          <input type="text" className="form-control" placeholder="Valor da Parcela" />
        </div>
      </div>
      <h5 className="h5 mt-4">Observações</h5>
      <div className="row mt-2">
        <div className="col-sm-12">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-5 float-right">Salvar</button>
      <button type="button" className="btn btn-primary mt-5 mr-2 float-right">Voltar</button>
    </form>

  )
}

export default NewContractLegalPerson