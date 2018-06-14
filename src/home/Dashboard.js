import React, { Component } from 'react'
import { fetchSales } from '../../src/sales-pipeline/actions'
import { connect } from 'react-redux'
import { BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import moment from 'moment'
import PropTypes from 'prop-types'

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchSales()
  }

  render() {

    const events = [
      {
        time: '10:00',
        event: 'Ligar',
        customer: 'Josefina Bosch'
      },
      {
        time: '11:00',
        event: 'Ligar',
        customer: 'Josefina Bosch'
      },
      {
        time: '13:00',
        event: 'Ligar',
        customer: 'Josefina Bosch'
      },
      {
        time: '15:00',
        event: 'Ligar',
        customer: 'Josefina Bosch'
      }
    ]

    const data = [
      { name: 'Janeiro', received: 1000 },
      { name: 'Fevereiro', received: 500 },
      { name: 'Março', received: 850 },
      { name: 'Abril', received: 250 },
      { name: 'Maio', received: 600 },
      { name: 'Junho', received: 700 },
      { name: 'Julho', received: 100 },
      { name: 'Agosto', received: 100 },
      { name: 'Setembro', received: 100 },
      { name: 'Outubro', received: 100 },
      { name: 'Novembro', received: 100 },
      { name: 'Dezembro', received: 500 },
    ]

    return (
      <div className="row">
        <div className="col-sm-12 mb-5" >
          <h1>Compromissos</h1>
          <h3 className="text-muted">{moment().format('D/MMM/YY')}</h3>
          <div className="card">
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Hora</th>
                    <th scope="col">Evento</th>
                    <th scope="col">Cliente</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((e, index) => (
                    <tr key={index}>
                      <th scope="row">{e.time}</th>
                      <td>{e.event}</td>
                      <td>{e.customer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div >
        <div className="col-sm-12 mb-5" >
          <h1>Projeção de Faturamento</h1>
          <div className="card">
            <BarChart width={1100} height={300} data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
              <ReferenceLine y={0} stroke='#000' />
              <Brush dataKey='name' height={30} stroke="#28a745" />
              {/* <Bar dataKey="#007bff" /> */}
              <Bar dataKey="received" name="Faturamento" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
      </div>
    )
  }
}
Dashboard.propTypes = {
  fetchSales: PropTypes,
}

const mapStateToProps = state => ({
  sales: state.salesPipeline.sales
})

const mapDispatchToProps = dispatch => ({
  fetchSales: () => dispatch(fetchSales())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)