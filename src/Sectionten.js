import React from "react";
import Thebadge from "./images/sqi badge.jpg";
import Icticon from "./images/SQI-Osogbo-400x250.jpg";
import Matric from "./images/5th-SQI-matriculation-400x250.png";

const Sectionten = () => {
  return (
    <div>
      <section>
        <div className="newsdiv">
          <div className="mainbody">
            <div className="latestdiv">
              <div className="newsnews">Latest News</div>
              <div className="readmoree">
                <a href="">Read More</a>
              </div>
            </div>
            <div className="latestmaindiv">
              <div className="boxnews">
                <div className="sqiimageee">
                  <img src={Thebadge} alt="" />
                </div>
                <div className="latestcontent">
                  <div className="collegeict">
                    SQI College of ICT Announces JAMB Cut-off Mark and Post-UTME
                    Exam Date
                  </div>
                  <div className="newsdate">Aug 14, 2024</div>
                  <div className="contentsqi">
                    SQI College of ICT has announced its JAMB/UTME cut-off mark
                    and the schedule for its upcoming Post-UTME examination,
                    offering new opportunities for aspiring tech students in
                    Nigeria. In a statement issued by its admission officer, Mr.
                    Timothy Michael, the college has...
                  </div>
                </div>
              </div>
              <div className="boxnews">
                <div className="sqiimageee">
                  <img src={Icticon} alt="" />
                </div>
                <div className="latestcontent">
                  <div className="collegeict">
                    SQI College of ICT Concludes 14th Annual ICT Scholarship
                    Program, Empowering Thousands Across Africa with Free Tech
                    Education
                  </div>
                  <div className="newsdate">Aug 14,Aug 6, 2024</div>
                  <div className="contentsqi">
                    In a remarkable display of commitment to advancing
                    technological education in Africa, the SQI College of ICT
                    has successfully wrapped up its 14th annual SQI ICT
                    Scholarship Program. The event drew an unprecedented number
                    of participants, with over 8000 registrations...
                  </div>
                </div>
              </div>
              <div className="boxnews">
                <div className="sqiimageee">
                  <img src={Matric} alt="" />
                </div>
                <div className="latestcontent">
                  <div className="collegeict">
                    5TH MATRICULATION CEREMONY | SQI COLLEGE OF ICT
                  </div>
                  <div className="newsdate">May 27, 2024</div>
                  <div className="contentsqi">
                    The Rector, on behalf of the Governing Council, Academic
                    Board, Management, Staff and Students of SQI College of ICT,
                    heartily requests the esteem presence of parents/guardian,
                    friends and the general public at the 5th Matriculation
                    Ceremony of the College. The...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Sectionten;
