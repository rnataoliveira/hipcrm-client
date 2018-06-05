import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
import CustomerSearchContainer from '../containers/CustomerSearchContainer'

const CustomerSource = ({ match, location }) => (
  <div className="col-12">
    <div className="d-flex justify-content-center mb-5 mt-5">
      <CustomerSearchContainer />
    </div>
    {/* <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-center " />
    <div className="d-flex justify-content-center mb-5">
      <Link to='/customers/new' className='btn btn-primary col-md-2 mt-5 ml-2 align-self-center'>Novo Cliente</Link>
    </div> */}
  </div>
)

CustomerSource.propTypes = {
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

export default CustomerSource