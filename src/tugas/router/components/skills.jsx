import React from 'react';

const Skills = () => {
  return (
    <section id="skill" className="container-fluid frame">
      <div className="col container text-lg-center">
        <div className="skill-top">
          <h5 className="text-light">MY SKILL</h5>
        </div>
        <div className="row container">
          <div className="col bg container">
            <p className="text-light">HTML</p>
            <div className="progress">
              <div className="progress-bar bg-success" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
            </div>
          </div>
          <div className="col bg container">
            <p className="text-light">CSS</p>
            <div className="progress">
              <div className="progress-bar bg-primary" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
            </div>
          </div>
        </div>
        <div className="row container">
          <div className="col bg container">
            <p className="text-light">JavaScript</p>
            <div className="progress">
              <div className="progress-bar bg-success" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
          </div>
          <div className="col bg container">
            <p className="text-light">MySQL</p>
            <div className="progress">
              <div className="progress-bar bg-warning" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;