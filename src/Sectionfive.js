import React from "react";
import Googlee from "./images/google.png";
import Interswitch from "./images/Interswitch.png";
import Andela from "./images/Andela-log-landscape-blue-400px.png";
import Microsoft from "./images/Microsoft_logo.png";
import Paystack from "./images/Paystack.png";
import Breweries from "./images/brewery.png";
import Wema from "./images/Wema-Bank-Logo.png";
import Creditclan from "./images/clan-logo.png";
import Edozzier from "./images/edozzier.png";
import Moneymie from "./images/moneymie.png";
import Army from "./images/Nigerian_Army.png";
import Aella from "./images/aella-credit.png";

const Sectionfive = () => {
  return (
    <div>
      <section className="sec5">
        <div className="alumnidiv">
          Our alumni work at world-class companies around the world including
        </div>
        <div>
          <div className="companiesicon">
            <div>
              <img src={Googlee} alt="" />
            </div>
            <div>
              <img src={Interswitch} alt="" />
            </div>
            <div>
              <img src={Andela} alt="" />
            </div>
            <div>
              <img src={Microsoft} alt="" />
            </div>
          </div>
          <div className="companiesicon">
            <div>
              <img src={Paystack} alt="" />
            </div>
            <div>
              <img src={Breweries} alt="" />
            </div>
            <div>
              <img src={Wema} alt="" />
            </div>
            <div>
              <img src={Creditclan} alt="" />
            </div>
          </div>
          <div className="companiesicon">
            <div>
              <img src={Edozzier} alt="" />
            </div>
            <div>
              <img src={Moneymie} alt="" />
            </div>
            <div>
              <img src={Army} alt="" />
            </div>
            <div>
              <img src={Aella} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Sectionfive;
