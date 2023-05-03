import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from "./context/User";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter> 
);
