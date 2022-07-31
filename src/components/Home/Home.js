import React from "react";
import img1 from "../../images/fa_space-shuttle.png";
import "./Home.css";
import Nav from "../Nav/Nav";
export const Home = () => {
  return (
    <>
      <main>
        <Nav/>
        <section className="main-section">
          <div className="banner-section">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="banner-wrapper">
                    <div className="banner-inner">
                      <div className="banner-content">
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
                        <h1>
                          Welcome to <br />{" "}
                          <span className="clr-change">Globetech</span>{" "}
                        </h1>
                        <p>
                          We are committed to deliver{" "}
                          <span className="clr-change">best IT services</span> .
                          Our Consultants have experience in working with
                          clients. We have extensive experience in the software
                          application space and also offer a broad range and
                          depth of technology.
                        </p>

                        <div className="button-holder">
                          <a href="#btn" className=" btn jfss-btn1">
                            Support us
                          </a>
                          <a href="#btn" className=" btn jfss-btn2">
                            Our Mission
                          </a>
                        </div>
                      </div>
                      {/* end banner-content  */}

                      {/* .banner-animation  */}
                      <div className="animation">
                        <div className="circle1">
                          <span className="cir1"></span>
                          <span className="cir2"></span>
                        </div>
                        <div className="circle2">
                          <span className="cir1"></span>
                          <span className="cir2"></span>
                        </div>
                        <div className="circle3">
                          <span className="cir1"></span>
                          <span className="cir2"></span>
                        </div>
                        <div className="circle4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
