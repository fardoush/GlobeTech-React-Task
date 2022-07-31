import React from 'react';
import img1 from "../../images/fa_space-shuttle.png";
import './Services.css';
import Card from './Card';
import ServiceData from './ServiceData';
// import Nav from '../Nav'
import Nav from '../Nav/Nav';


export const Services = () => {
  return (
    <>
      <Nav/>
      <section className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <div className="anim-plane">
                <div className="planeImg">
                  <img src={img1} alt="" />
                </div>
              </div> */}
              <div className="anim-plane d-flex">
                          
                          <div className="planeImg d-flex">
                        <div className="line-anim d-flex justify-content-start align-items-center flex-column">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                            <img src={img1} alt="" />
                          </div>
                        </div>

              <div className="service-wrapper d-flex justify-content-center align-items-center flex-column">
                <div className="service-header">
                  <h2 className='text-center'>SERVICES</h2>
                  <p className='text-center'>We provides services to our clients</p>
                </div>
                <div className="row">
                  

              {/* <div className="col-lg-4 col-md-4 col-sm-12">
                <Card
               
               title={ServiceData[0].title}
                />
              </div> */}

              {ServiceData.map(Card)}


          
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Services;
