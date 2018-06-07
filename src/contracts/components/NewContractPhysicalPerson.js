import React, { Component } from 'react'

const NewContractPhysicalPerson = () => {
  return (
    <form className="mt-5">
      <h2 className="h2">Cadastrar Contrato - Pessoa Fisíca</h2>
      <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-start " />
      <div className="row">
        <div className="col-sm-4">
          <input type="text" className="form-control" placeholder="Número do Contrato" />
        </div>
      </div>
      <hr />
      <h5 className="h5 mt-4">Dados do Plano</h5>
      <div className="row">
        <div className="col-sm-8">
          <input type="text" className="form-control" placeholder="Plano Contratado" />
        </div>
        <div className="col-sm-2">
          <input type="text" className="form-control" placeholder="DDD" />
        </div>
        <div className="col-sm-2">
          <input type="text" className="form-control" placeholder="Telefone do Plano" />
        </div>
      </div>

      <h5 className="h5 mt-4">Dependentes</h5>
      <div className="row mt-2">
        <div className="col-sm-6">
          <input type="text" className="form-control" placeholder="Nome" />
        </div>
        <div className="col-sm-2">
          <input type="text" className="form-control" placeholder="Cpf" />
        </div>
        <div className="col-sm-2">
          <input type="text" className="form-control" placeholder="Rg" />
        </div>
        <div className="col-sm-2">
          <input type="text" className="form-control" placeholder="DD/MM/AAAA" />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-7">
          <input type="text" className="form-control" placeholder="Nome da Mãe" />
        </div>
        <div className="col-sm-2">
          <select className="custom-select">
            <option selected>Estado Civil</option>
            <option value="1">Solteiro</option>
            <option value="2">União Estável</option>
            <option value="3">Casado</option>
            <option value="4">Divorciado</option>
            <option value="5">Viúvo</option>
          </select>
        </div>
        <div className="col-sm-3">
          <input type="text" className="form-control" placeholder="Grau de Parentesco" />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-12">
          <button type="button" className="btn btn-primary float-right ">Mais Dependentes</button>
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
          {/* (valor total - entrada) / parcelas*/}
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
export default NewContractPhysicalPerson