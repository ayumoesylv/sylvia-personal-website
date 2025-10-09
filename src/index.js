import React from 'react';
import ReactDOM from 'react-dom/client';
import './general.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AboutMe from './AboutMe/Page';
import Navbar from "./ConstantComponents/Navbar";
import Hobbies from "./Hobbies/Page"
import Contact from "./ContactMe/Page"
import MyProjects from './MyProjects/Page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<AboutMe />} />
        <Route path = "/hobbies" element = {<Hobbies />} />
        <Route path = "/contact" element = {<Contact />}/>
        <Route path = "/projects" element = {<MyProjects />}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);
