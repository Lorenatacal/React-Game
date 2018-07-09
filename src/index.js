import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from './data';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App cards={data} />, document.getElementById('root'));
registerServiceWorker();
