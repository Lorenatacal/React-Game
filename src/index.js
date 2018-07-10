import React from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import InputRange from 'react-input-range';
import _ from 'lodash';
import {Icon} from 'react-fa';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from './data';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App cards={data} />, document.getElementById('root'));
registerServiceWorker();
