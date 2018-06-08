import React, { Component } from 'react'
import { fetchSales } from '../../src/sales-pipeline/actions'
import { connect } from 'react-redux'

class Dashboard extends Component {

  componentDidMount() {
    this.props.fetchSales()
  }

  render() {
    {
      this.props.sales.map(sale => {
        console.log(sale.calendarId)
      })
    }
    return (
      <div className="row mb-5" >
        <div className="mt-4">
          <h1>Compromissos do dia</h1>
        </div>
        {/* {this.props.sales.map(sale => { */}
        <div className="embed-responsive embed-responsive-16by9 mt-2">
          <iframe className="embed-responsive-item" src={`https://calendar.google.com/calendar/embed?showTitle=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=primary&amp;color=%23AB8B00&amp;ctz=America%2FSao_Paulo`}
            style={{ borderWidth: '0', width: '100%', height: '600px', frameborder: '0', scrolling: 'no' }}>
          </iframe>
        </div>
        {/* })} */}
      </div>)
  }
}

const mapStateToProps = state => ({
  sales: state.salesPipeline.sales
})

const mapDispatchToProps = dispatch => ({
  fetchSales: () => dispatch(fetchSales())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)