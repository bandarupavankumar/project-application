import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './components/pages/About';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Contact from './components/pages/Contact';
import Car from './components/Car';
import Cards from './components/Cards';
import Packet from './components/Packet';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
      </Routes>
      <Car/>
      <Cards/>
      <Packet/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

