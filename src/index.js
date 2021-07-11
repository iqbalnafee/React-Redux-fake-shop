import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //provide store to our react application
import App from './App';
import store from './redux/store';


ReactDOM.render(

  //provide store to our react application

  <React.StrictMode> 
    <Provider store={store}> 
     <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


