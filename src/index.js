import React from 'react'
import { render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { App } from './layout'

render(<App />, document.getElementById('root'))
registerServiceWorker()
