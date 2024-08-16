import React from 'react';
import devImage2 from '../asset/dev.png'

const About = () => {
  return (
    <section id="about" className="container-fluid frame bg-warning">
      <div className="about row container-fluid">
        <div id="about-left" className="col align-content-center justify-content-center">
          <img src= {devImage2} alt="profil" className="object-fit-cover" />
        </div>
        <div id="about-right" className="col align-content-center text-light">
          <h5>Frontend Web Developer</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum!
          </p>
          <div id="line" className="bg-dark"></div>
          <div>
            <table className="tab-content">
              <tr>
                <td>Nama</td>
                <td> : Dzikri Fauzi Ramdhani</td>
                <td style={{ width: '5%' }}></td>
                <td>Email</td>
                <td> : dzikrifr@gmail.com</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td> : +62 856 9191 9544</td>
                <td style={{ width: '5%' }}></td>
                <td>Address</td>
                <td> : Kota Tangerang</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;