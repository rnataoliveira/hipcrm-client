import React, { Component } from 'react'
import { fetchSales } from '../../src/sales-pipeline/actions'
import { connect } from 'react-redux'
import { BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import moment from 'moment'
import PropTypes from 'prop-types'
import { fetchAllAppointments } from './actions'

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchAllAppointments()
  }

  render() {
    console.log(this.props.appointments, 'appointments')

    const data = [
      { name: 'Janeiro', received: 1000 },
      { name: 'Fevereiro', received: 800 },
      { name: 'Março', received: 900 },
      { name: 'Abril', received: 700 },
      { name: 'Maio', received: 700 },
      { name: 'Junho', received: null },
      { name: 'Julho', received: null },
      { name: 'Agosto', received: null },
      { name: 'Setembro', received: null },
      { name: 'Outubro', received: null },
      { name: 'Novembro', received: null },
      { name: 'Dezembro', received: null },
    ]

    return (
      <div className="row">
        <div className="col-sm-12 mb-5" >
          <h1>Compromissos</h1>
          <h3 className="text-muted">{moment().format('D/MMM/YY')}</h3>
          {this.props.appointments && (
            <div className="card">
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Data</th>
                      <th scope="col">Hora</th>
                      <th scope="col">Evento</th>
                      <th scope="col">Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.appointments.map((a, index) => (
                      moment().format('D/MMM/YY') === moment(a.start.dateTime).format('D/MMM/YY') ?
                        <tr key={index}>
                          <th >{moment(a.start.dateTime).format('D/MMM/YY')}</th>
                          <th scope="row">{moment(a.start.dateTime).format('hh:mm')}</th>
                          <td>{a.summary}</td>
                          <td><a href={a.htmlLink} target="_blank">Acessar</a></td>
                        </tr>
                        : ''
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
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
              <Bar dataKey="received" name="Faturamento" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  fetchAllAppointments: PropTypes.func,
  appointments: PropTypes,
  fetchSales: PropTypes.func,
  sales: PropTypes.array
}

const mapStateToProps = state => ({
  appointments: state.home.appointments,
  sales: state.salesPipeline.sales
})

const mapDispatchToProps = dispatch => ({
  fetchAllAppointments: () => dispatch(fetchAllAppointments()),
  fetchSales: () => dispatch(fetchSales())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)