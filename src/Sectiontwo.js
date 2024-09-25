import React from "react";
import Nationaldiploma from "./images/national diploma1.jpg";
import Profdiploma from "./images/prof diploma.jpg";
import Certificateprogram from "./images/certificate program.jpg";

const Sectiontwo = () => {
  return (
    <div>
      <section className="sec2">
        <div className="changeworld">Start here. Change the world.</div>
        <div className="Diplomadiv">
          <div>
            <img src={Nationaldiploma} alt="" />
          </div>
          <div>
            <img src={Profdiploma} alt="" />
          </div>
          <div>
            <img src={Certificateprogram} alt="" />
          </div>
        </div>
        <div className="Diplomacontent">
          <div className="Dipprogram">
            <div className="Nid">National Innovative Diploma (NID)</div>
            <div className="Nidcontent">
              The National Innovation Diploma (NID) offered at SQI College of
              ICT is a 2 year approved academic program of the National Board
              for Technical Education (NBTE).
            </div>
            <div className="learnmore">
              <a href="">Learn More</a>
              <div className="smalline"></div>
            </div>
          </div>

          <div className="Dipprogram">
            <div className="Nid">Professional Diploma Certificate</div>
            <div className="Nidcontent">
              The Professional Certificate Program is 1 year practical training
              with wide range of edge-cutting IT certification courses offered
              in SQI College of ICT to people who want to advance their career.
            </div>
            <div className="learnmore">
              <a href="">Learn More</a>
              <div className="smalline"></div>
            </div>
          </div>

          <div className="Dipprogram">
            <div className="Nid">Certificate Program</div>
            <div className="Nidcontent">
              The Certificate Program is a short-term training, 2 weeks to 6
              months with a wide range of edge-cutting IT certification courses
              offered in SQI College of ICT to people who want to advance their
              careers.
            </div>
            <div className="learnmore">
              <a href="">Learn More</a>
              <div className="smalline"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Sectiontwo;
