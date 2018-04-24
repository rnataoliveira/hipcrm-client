import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import Shell from './components/layout/Shell'

const App = props => {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  )
}

export default App
