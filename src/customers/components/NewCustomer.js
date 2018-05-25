import React from 'react'
import { Switch, Route } from 'react-router'
import { Link } from 'react-router-dom'

import NewPhysicalPerson from './NewPhysicalPerson'
import NewLegalPerson from './NewLegalPerson'

this.state = {
  customerType: 'choose'
}

const NewCustomer = () => {
  return (
    <div className="col-lg-12 mb-5 d-flex justify-content-center" >
      <Switch>
        <Route path='/customers/new/physical-person' component={NewPhysicalPerson} />
        <Route path='/customers/new/legal-person' component={NewLegalPerson} />
        <Route path='/customers/new' component={() => (
          <div className="d-flex justify-content-center">
            <Link to="/customers/new/physical-person" className="btn btn-primary m-5">Pessoa Fisíca</Link>
            <Link to="/customers/new/legal-person" className="btn btn-primary m-5">Pessoa Juridíca</Link>
          </div>
        )} />
      </Switch>
    </div>
  )
}

export default NewCustomer