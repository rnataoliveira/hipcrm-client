import React from 'react'
import { connect } from 'react-redux'

const Appointments = ({ calendarId }) => (
  <div className="embed-responsive embed-responsive-16by9 mt-2">
    <iframe className="embed-responsive-item" src={`https://calendar.google.com/calendar/embed?src=${calendarId}&ctz=America%2FSao_Paulo`} style={{ borderWidth: '0', width: '100%', height: '600px', scrolling: 'no' }}></iframe>
  </div>
)

const mapStateToProps = state => ({
  calendarId: state.salesPipeline.sale.calendarId
})

export default connect(mapStateToProps)(Appointments)