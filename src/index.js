import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CssBaseline from 'material-ui/CssBaseline'

const app = (
    <React.Fragment>
        <CssBaseline />
        <App />
    </React.Fragment>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
