import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App'
import Registration from './components/Login/Registration'

ReactDOM.render(
  <React.StrictMode>
    <div>
    <App />
    <Registration/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

