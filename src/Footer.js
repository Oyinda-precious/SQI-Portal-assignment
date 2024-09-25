import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <section className="sec11">
        <div>
          <div className="firstrow">
            <div className="footerdisplay">
              <div>
                <div className="hellocollege">
                  Hello, we’re SQI College of ICT
                </div>
                <div className="footerict">
                  We provide and lead others in quality ICT education.
                </div>

                <div className="footericon">
                  <div>
                    {" "}
                    <FaFacebookF />{" "}
                  </div>
                  <div>
                    {" "}
                    <BsTwitterX />
                  </div>
                  <div>
                    {" "}
                    <FaLinkedinIn />
                  </div>
                  <div>
                    {" "}
                    <FaYoutube />
                  </div>
                </div>
                <div className="instagramm">
                  <FaInstagram />
                </div>
                <div>Send us a mail</div>
                <div className="enquiryy">
                  <a href="">enquiry@edu.sqi.ng</a>
                </div>
              </div>

              <div className="eachfooter">
                {" "}
                <h6>Quick Links</h6>
                <ul className="listedcoursesss">
                  <div>
                    <li>Application Portal</li>
                  </div>
                  <div>
                    <li>Student Portal</li>
                  </div>
                  <div>
                    <li>Professional Courses</li>
                  </div>
                  <div>
                    <li>NID Coiurses</li>
                  </div>
                  <div>
                    <li>Campus Info</li>
                  </div>
                  <div>
                    <li>Accommodation</li>
                  </div>
                  <div>
                    <li>SQI Schorlaship</li>
                  </div>
                  <div>
                    <li>Donate</li>
                  </div>
                </ul>
              </div>
              <div className="eachfooter">
                {" "}
                <h6>Ogbomoso</h6>
                <ul className="listedcoursesss2">
                  <div className="location1">
                    <li>Old Ilorin Road, Opposite Yoaco Filling Station,</li>
                  </div>
                  <div>
                    <li>Yoaco, Ogbomoso.</li>
                  </div>
                  <div className="numbersdiv">
                    <li>0906 281 9991, 0906 281 9993</li>
                  </div>
                  <div className="locatemap">
                    <a href="">Locate on the map</a>
                  </div>
                </ul>
              </div>
              <div className="eachfooter">
                <h6>Ibadan</h6>
                <ul className="listedcoursesss3">
                  <div className="locationibadan">
                    <li>
                      First Floor, H25 Heritage Mall, Opposite Central Bank of
                      Nigeria, Dugbe, Ibadan.
                    </li>
                  </div>
                  <div className="nodiv">
                    <li>0906 281 9994</li>
                  </div>
                  <div className="locatemap">
                    <a href="">Locate on the map</a>
                  </div>
                  <div className="ibadanlocation2">
                    <li>
                      Christianah Oyinade Ajoke House, beside First Bank,
                      Arisekola Central Mosque, Opposite Jaiz bank, Idi Ape, Iwo
                      road, Ibadan.
                    </li>
                  </div>
                  <div className="nodiv">
                    <li>0906 281 9995</li>
                  </div>
                  <div className="locatemap">
                    <a href="">Locate on the map</a>
                  </div>
                  <div className="ibadanlocation2">
                    <li>
                      Haier Thermocool Building, opposite SAO filling station,
                      Challenge, Ibadan, Oyo State.
                    </li>
                  </div>
                  <div className="nodiv">
                    <li>0906 281 9994</li>
                  </div>
                  <div className="locatemap">
                    <a href="">Locate on the map</a>
                  </div>
                </ul>
              </div>
              <div className="eachfooter">
                <h6>Abeokuta</h6>
                <ul className="listedcoursesss3">
                  <div className="ibadanlocation2">
                    <li>
                      First floor, OPIC Tower building, Okeilewo, Abeokuta.
                    </li>
                  </div>
                  <div className="nodiv">
                    <li>0906 281 9996</li>
                  </div>
                  <div className="locatemap">
                    <a href="">Locate on the map</a>
                  </div>
                  <div className="osogboo">
                    <li>Osogbo</li>
                  </div>
                  <div className="ibadanlocation2">
                    <li>Opposite Jaiz bank, Ogo-Oluwa, Osogbo</li>
                  </div>
                  <div className="nodiv">
                    <li>0906 281 9997</li>
                  </div>
                  <div className="locatemap">
                    <a href="">Locate on the map</a>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="copyright">
        <div>Copyright © 2024 | SQI ICT Consultants. All Rights Reserved.</div>
      </div>
    </div>
  );
};
export default Footer;
