import React from 'react';
import lorem from '../asset/lorem.jpg';

const Portfolio = () => {
  return (
    <section id="portofolio" className="container-fluid frame justify-content-around">
      <div className="card" style={{ width: '15vw', height: '30vw' }}>
        <img src={lorem} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text text-wrap" style={{ fontSize: '1.4vw' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="card" style={{ width: '15vw', height: '30vw' }}>
        <img src={lorem} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text text-wrap" style={{ fontSize: '1.4vw' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="card" style={{ width: '15vw', height: '30vw' }}>
        <img src={lorem} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text text-wrap" style={{ fontSize: '1.4vw' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;