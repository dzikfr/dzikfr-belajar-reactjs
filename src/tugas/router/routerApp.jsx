import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import './index.css';


const RouterApp = () => {
    return (
       <BrowserRouter>
            <div>
                <Navbar/>
                <Home/>
            </div>
       </BrowserRouter>
    );
};

export default RouterApp;
