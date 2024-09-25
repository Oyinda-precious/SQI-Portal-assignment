import React from "react";
import "./Sqidashboard.css";
import { Link, Outlet } from "react-router-dom";
const Sidenav = () => {
  return (
    <>
      <div className="thebody">
        <div className="sqidashboard">
          <h3 className="scict">SCICT</h3>
          <div className="studentportal">Student Portal</div>
          <div className="pdcdiv">
            <div className="pdc">PDC</div>
          </div>

          <div>
            <div className="general">General</div>
            <p className="dashboard">
              <Link to="/home">Dashboard</Link>
              {/* <a href="">Dashboard</a> */}
            </p>
          </div>
          <div>
            <div className="general">Profile</div>
            <p className="dashboard">
              <Link to="/home/myProfile">MyProfile</Link>
              {/* <a href="">My Profile</a> */}
            </p>
            <p className="dashboard">
              <Link to="/home/changePassword">Change Password</Link>
              {/* <a href="">Change Password</a> */}
            </p>
            <p className="dashboard">
              <a href="">Documents</a>
            </p>
          </div>
          <div>
            <div className="general">Academic</div>
            <p className="dashboard">
              <a href="">Course Registration</a>
            </p>
            <p className="dashboard">
              <a href="">Resources</a>
            </p>
            <p className="dashboard">
              <a href="">Registration Histroy</a>
            </p>
            <p className="dashboard">
              <a href="">Semester Result</a>
            </p>
            <p className="dashboard">
              <a href="">View Timetable</a>
            </p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Sidenav;
