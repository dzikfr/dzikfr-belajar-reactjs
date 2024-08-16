import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import About from './components/about';
import Skills from './components/skills';
import Portofolio from './components/portofolio';

const RouterApp = () => {
    return (
       <BrowserRouter>
            <div>
                <h1>Belajar menggunakan React Router DOM</h1>
                <nav>
                    <Link to="/about"><button>About</button></Link>
                    <Link to="/skills"><button>Skills</button></Link>
                    <Link to="/portfolio"><button>Portfolio</button></Link>
                </nav>

                <Routes>
                    <Route path="/about" element={<About/>} />
                    <Route path="/skills" element={<Skills/>} />
                    <Route path="/portfolio" element={<Portofolio/>} />
                </Routes>
            </div>
       </BrowserRouter>
    );
};

export default RouterApp;
