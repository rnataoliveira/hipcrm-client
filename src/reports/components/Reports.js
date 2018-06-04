import React, { Component } from 'react'

class Reports extends Component {

  render() {
    return (
      <div>
        <h1 className="mt-4">Relatório de Faturamento</h1>
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">Mês</th>
              <th scope="col">Ano</th>
              <th scope="col">Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Janeiro</th>
              <td>2018</td>
              <td>R$ 800,00</td>
            </tr>
            <tr>
              <th>Janeiro</th>
              <td>2018</td>
              <td>R$ 750,00</td>
            </tr>
            <tr>
              <th>Janeiro</th>
              <td>2018</td>
              <td>R$ 120,00</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th></th>
              <th>Total</th>
              <th>R$ 1.670,00</th>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Reports