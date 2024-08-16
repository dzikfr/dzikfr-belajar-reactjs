import React from 'react';
import devImage from '../asset/dev2.png';

const Home = () => {
  return (
    <section id="home" className="container-fluid frame">
      <div className="row hero">
        <div id="hero-left" className="col">
          <p className="text-light">HI, Saya</p>
          <h2 className="font-monospace text-decoration-underline text-light">Dzikri <span className="text-danger">Fauzi</span></h2>
          <p id="app" className="text-light">Frontend Web</p>
        </div>
        <div id="hero-right" className="col align-content-center justify-content-center">
          <img src={devImage} alt="dev" />
        </div>
      </div>
    </section>
  );
};

export default Home;
