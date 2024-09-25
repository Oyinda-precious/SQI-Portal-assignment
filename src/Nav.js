import React from "react";
import Image1 from "./images/sqi icon.jpg";

const Nav = () => {
  return (
    <div>
      <nav>
        <div className="header">
          <div className="mainn">
            <div className="logodiv">
              <img src={Image1} alt="" />
            </div>
            <div className="services">
              <div>
                <a href="">About</a>
              </div>
              <div>
                <a href="">Programmes</a>
              </div>
              <div>
                <a href="">Admissions</a>
              </div>
              <div>
                <a href="">E-Portal</a>
              </div>
              <div>
                <a href="">SQI Scholarship</a>
              </div>
              <div>
                <a href="">News</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
