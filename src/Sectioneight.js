import React from "react";
import Weblaptop from "./images/web-design-laptop.jpg";
import { GiMaterialsScience } from "react-icons/gi";
import { FaBookReader } from "react-icons/fa";
import { MdOutlineWaves } from "react-icons/md";
import { FaReadme } from "react-icons/fa6";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoIosChatbubbles } from "react-icons/io";
import { PiBagSimpleFill } from "react-icons/pi";
import { FaBook } from "react-icons/fa6";

const Sectioneight = () => {
  return (
    <div>
      <section className="sec8">
        <div className="displayboth">
          <div className="whysqi">Why study at SQI?</div>
          <div className="laptopp">
            <img src={Weblaptop} />
          </div>
        </div>
        <div>
          <div className="iconbook">
            <div className="scienceicon">
              <GiMaterialsScience />
            </div>
            <div className="bookreaderr">
              <FaBookReader />
            </div>
          </div>
          <div className="learningdetails">
            <div>
              <h4>Project Based Learning</h4>
              <p className="projectlearning">
                Our courses are practical, hands-on learning. Practice and apply
                knowledge with real world projects that contribute largely to
                your portfolio.
              </p>
            </div>
            <div>
              <h4>Expert Instructors</h4>
              <p className="projectlearning">
                Get to interact with different mentors and draw from their loads
                of experience.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="iconbook">
            <div className="scienceicon">
              <MdOutlineWaves />
            </div>
            <div className="bookreaderr">
              <FaReadme />
            </div>
          </div>
          <div className="learningdetails">
            <div>
              <h4>Physical & Virtual Class</h4>
              <p className="projectlearning">
                You can now choose physical class experience or online classroom
                and learn from anywhere in the world.
              </p>
            </div>
            <div>
              <h4 className="projectdivv">
                Free access to our hub and community
              </h4>
              <p className="projectlearning">
                You will have access to our fully functional hub for co-working
                and working on projects, assignments and even begin a start-up.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="iconbook">
            <div className="scienceicon">
              <LiaCertificateSolid />
            </div>
            <div className="bookreaderr">
              <IoIosChatbubbles />
            </div>
          </div>
          <div className="learningdetails">
            <div>
              <h4>Certification</h4>
              <p className="projectlearning">
                Be certified by an accredited and globally recognized
                institution. SQI got its accreditation in Sept 2021 from the
                NBTE, Nigeria.
              </p>
            </div>
            <div>
              <h4 className="projectdivv">Alumni Support</h4>
              <p className="projectlearning">
                Our students have access to alumni who currently work at top
                tech organizations in the world such as Google, Microsoft,
                Interswitch etc.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="iconbook">
            <div className="scienceicon">
              <PiBagSimpleFill />
            </div>
            <div className="bookreaderr">
              <FaBook />
            </div>
          </div>
          <div className="learningdetails">
            <div>
              <h4>Job Opportunity</h4>
              <p className="projectlearning">
                78.5% of our students found secure employment within three
                months of graduation. Students leave from learning to getting
                job roles
              </p>
            </div>
            <div>
              <h4 className="projectdivv">Access to study materials</h4>
              <p className="projectlearning">
                Students have access to prerecorded videos and resources they
                can make use of to further solidify their knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Sectioneight;
