import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <Router>
        <App />
    </Router>
    </BrowserRouter>, 
    document.getElementById('root')
);

registerServiceWorker();
