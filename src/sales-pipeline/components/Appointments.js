import React from 'react'
import { connect } from 'react-redux'

const Appointments = ({ calendarId }) => (
  <iframe src={`https://calendar.google.com/calendar/embed?src=${calendarId}&ctz=America%2FSao_Paulo`} style={{ borderWidth: '0', width: '100%', height: '600px', frameborder: '0', scrolling: 'no' }}></iframe>
)

const mapStateToProps = state => ({
  calendarId: state.salesPipeline.sale.calendarId
})

export default connect(mapStateToProps)(Appointments)