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
import Appointment from './components/pages/Appointment';
import Love from './components/pages/solution/Love';
import Career from './components/pages/solution/Career'
import Relation from './components/pages/solution/Relation'
import Health from './components/pages/solution/Health'
import Business from './components/pages/solution/Business'
import Financial from './components/pages/solution/Financial'
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
        <Route path='appointment' element={<Appointment/>} />
        <Route path='careerproblemsolution' element={<Career/>}/>
        <Route path='loveproblemsolution' element={<Love/>}/>
        <Route path='relationshipProblemsolution' element={<Relation/>}/>
        <Route path='healthProblemsolution' element={<Health/>}/>
        <Route path='businessProblemsolution' element={<Business/>}/>
        <Route path='FinancialProblemsolution' element={<Financial/>}/>
        
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

