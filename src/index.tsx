import React from 'react';
import ReactDOM from 'react-dom/client';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { positions, Provider } from "react-alert";
import { AlertCircle, CheckCircle, Info, X } from "react-feather";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const AlertTemplate = ({ style, options, message, close }: any) => (
  <div className="react-alert-card">
    <div className="d-flex align-items-start">
      {options.type === 'info' && <AlertCircle className="text-info mx-2 " />}
      {options.type === 'success' && <CheckCircle className="text-success mx-2 " />}
      {options.type === 'error' && <Info className="text-danger mx-2 " />}
      <div>
        <h5>Transaction</h5>
        {message}
      </div>
    </div>
    <button onClick={close}><X size="14" /></button>
  </div>
)
const options = {
  position: positions.BOTTOM_RIGHT
}

const getLibrary = (provider: any) => {
  const library = new Web3Provider(provider, 'any')
  library.pollingInterval = 15000
  return library
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider template={AlertTemplate} {...options}>
        <App />
      </Provider>
    </Web3ReactProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
