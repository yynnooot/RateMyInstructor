import '../public/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';
import Root from './components/Root.jsx';


ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>
  ,
  document.getElementById('app')
)