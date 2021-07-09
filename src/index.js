import React from 'react';
import ReactDom from 'react-dom';
import { createsStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import reducer from './reducers'
import App from './Component/App';
import registerServiceWoker from './registerServiceWorker';
 
const store = createStore(reducer)

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWoker();
