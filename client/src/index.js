import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProvider from './provider/UserProvider';
import DoctorProvider from './provider/DoctorProvider';
import AppointmentProvider from './provider/AppointmentProvider'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <DoctorProvider>
          <AppointmentProvider>
            <App />
          </AppointmentProvider>
        </DoctorProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();