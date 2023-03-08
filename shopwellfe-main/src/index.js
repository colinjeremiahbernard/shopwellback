import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App';
import Reducers from './Reducers';

const store = createStore(Reducers)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
        <App />
    </Provider>
    
  </React.StrictMode>
)
