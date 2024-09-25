import React from "react";
import Imagesec from "./images/sec1 image.png";

const Sessionone = () => {
  return (
    <div>
      <section className="sec1">
        <div className="studysec">
          <h1>Study to become a global talent</h1>

          <div className="firstimage">
            <img src={Imagesec} alt="" />
          </div>
        </div>
        <div className="skills">
          <div>
            Learn new tech skills using a world-class curriculum from top
            industry experts in an accredited institution.
          </div>
          <div className="startnow">
            <a href="">Start Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Sessionone;
