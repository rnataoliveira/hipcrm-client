import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Autosuggest from 'react-autosuggest'

// import CreateCustomerContainer from '../customers/CreateCustomerContainer'
import CustomerTypeForm from '../customers/CustomerTypeForm'

const customers = [
  {
    name: 'Maria José da Silva',
    officialDocument: '043.654.087-00',
    contractNumber: '001-B01'
  },
  {
    name: 'José da Silva',
    officialDocument: '055.265.088-20',
    contractNumber: '002-B01'
  },
  {
    name: 'João Pedro da Conceição',
    officialDocument: '129.333.120-01',
    contractNumber: '002-B01'
  }
]

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0 ? [] : customers.filter(c =>
    c.name.toLowerCase().slice(0, inputLength) === inputValue
  )
}

const getSuggestionValue = suggestion => suggestion.name

const renderSuggestion = suggestion => (
  <a>{suggestion.name}</a>
)

class Customer extends Component {
  constructor() {
    super()
    this.state = {
      operation: 'search',
      value: '',
      suggestions: []
    }
  }

  componentDidMount() {
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    })
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: getSuggestions(value)
    })
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    })
  }

  handleNewCustomer(event) {
    this.setState({
      operation: 'new-customer'
    })
  }

  render() {
    const { value, suggestions } = this.state

    const inputProps = {
      placeholder: 'Search a Customer',
      value,
      onChange: this.onChange.bind(this)
    }

    return (
      <div className="row" data-toggle='dropdown'>
        {this.state.operation === 'search' &&
                    <div className="col-12">
                      <div className="col-lg-12 d-flex justify-content-center mb-5 mt-5">
                        {/* <input className="form-control col-md-4 mt-5 align-self-center text-center" type="search" placeholder="Search" aria-label="Search" /> */}
                        <Autosuggest
                          suggestions={suggestions}
                          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
                          onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
                          getSuggestionValue={getSuggestionValue}
                          renderSuggestion={renderSuggestion}
                          inputProps={inputProps}
                          theme={{ 
                            input: 'form-control',
                            suggestionsList: 'dropdown-menu',
                            suggestion: 'dropdown-item'
                          }}
                        />
                      </div>
                      <hr style={{ color: '#757575', width: '90%' }} className="d-flex justify-content-center " />
                      <div className="col-lg-12 d-flex justify-content-center mb-5">
                        <button onClick={this.handleNewCustomer.bind(this)} className="btn btn-primary col-md-2 mt-5 ml-2 align-self-center" type="submit">Novo Cliente</button>
                      </div>
                    </div>}

        {this.state.operation === 'new-customer' && <CustomerTypeForm />}
      </div>
    )
  }
}

export default Customer