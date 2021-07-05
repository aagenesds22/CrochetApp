
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';
require('dotenv').config();

const client = new ApolloClient({

  uri: process.env.REACT_APP_BACK_URL,
  cache: new InMemoryCache(),

})
console.log(__dirname);
console.log(process.env.REACT_APP_BACK_URL);
console.log(process.env.REACT_APP_TEST1425);


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <Router>
          <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
