import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import rootReducer from './redux/reducer';
import {Provider} from 'react-redux';
import ConnectApp from './reduxStateConnector'

const store = new createStore(rootReducer);

ReactDOM.render(<Provider store={store}><ConnectApp /></Provider>, document.getElementById('root'));
registerServiceWorker();
