import React from "react";
import Testiimage from "./images/testimonial image.jpg";
import { FaStar } from "react-icons/fa";
import Powergoogle from "./images/powered_by_google_on_white.png";
import { FcGoogle } from "react-icons/fc";

const Sectionseven = () => {
  return (
    <div>
      <section className="sec7">
        <div>
          <strong className="testidiv">Testimonials</strong>
          <div className="testicontent">
            Read what our current students and alumni have to say about their
            SQI experience.
          </div>
        </div>
        <div className="testimonials">
          <div className="testiimagee">
            <img src={Testiimage} alt="" srcset="" />
          </div>
          <div>
            <div className="sqicollege">
              <a href="">SQI College of ICT IBADAN</a>
            </div>
            <div>
              <div className="rating">
                <div>4.9 </div>
                <div className="star">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <div className="reviews">Based on 84 reviews</div>
              <div className="powergooglee">
                <img src={Powergoogle} alt="" />
              </div>
              <div className="reviewss">
                <div className="thereview">review us on </div>
                <div className="smallgoogle">
                  <FcGoogle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Sectionseven;
