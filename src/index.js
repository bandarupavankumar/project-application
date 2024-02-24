import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './components/pages/About';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Contact from './components/pages/Contact';
// import Car from './components/Car';
// import Cards from './components/Cards';
// import Packet from './components/Packet';

// import Accordian from './components/Accordian';
// import Tub from './components/Tub';
// import Rating from './components/Rating';
// import test from './components/test';
// import Rot from './components/Rot';
// import Footer from './components/Footer'
// import MyMarquee from './components/MyMarquee';
// import Map from './components/Map';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <MyMarquee/>
      <Header/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        
      </Routes>
      {/* <Car/>
      <Cards/>
      <Packet/>
      <Accordian/>
      <Tub/>
      <Rating/>
      <test/>
      <Rot/>
      <Map/>
      <Footer/>
      */} <App />
    </BrowserRouter>
  </React.StrictMode>
);

