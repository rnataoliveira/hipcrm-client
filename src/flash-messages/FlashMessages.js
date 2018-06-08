import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { displayed } from '../flash-messages/actions'

import Alert from './Alert'

class FlashMessages extends Component {
  constructor(props) {
    super(props)
    this.state = { messages: [], displaying: false }
  }

  static getDerivedStateFromProps(props, state) {
    console.info('getDerivedStateFromProps', props, state)
    return { messages: props.messages, displaying: props.messages.length > 0 }
  }

  render() {
    return (
      <div className="mt-5 mb-5">
        {this.state.messages.map((message, index) => 
          <Alert key={index} {...message} />
        )}
      </div>
    )
  }

  // componentDidUpdate() {
  //   console.info('componentDidUpdate', this.props, this.state)
  //   this.state.displaying && this.props.displayed()
  // }
}

FlashMessages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(Object.keys(Alert.classes)),
    text: PropTypes.string.isRequired
  })),
  displayed: PropTypes.func.isRequired
}

const FlashMessagesContainer = (props) => props.messages && props.messages.length > 0 ? <FlashMessages {...props} /> : null

FlashMessagesContainer.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(Object.keys(Alert.classes)),
    text: PropTypes.string.isRequired
  })),
  displayed: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  messages: state.messages
})

const mapDispatchToProps = dispatch => ({
  displayed: () => dispatch(displayed())
})

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessages)