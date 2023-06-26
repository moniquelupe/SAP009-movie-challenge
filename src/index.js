import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './pages/Details/Details'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/details/:id" element={<Details/>}/>
    </Routes>
  </BrowserRouter>
);