import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'jquery/dist/jquery.min'
import 'materialize-css/dist/css/materialize.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
