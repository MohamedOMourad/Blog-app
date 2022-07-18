import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
import { TheContextProvider } from './Components/Context';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducers } from './redux/rducers';
import "/node_modules/font-awesome/css/font-awesome.min.css";

const store = createStore(reducers);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <TheContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TheContextProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
