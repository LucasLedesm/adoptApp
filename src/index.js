import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <Home/>
    <Footer/>
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
