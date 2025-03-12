import logo from "./logo.svg";
import "./App.css";

import Nav from "./Nav";
import Sessionone from "./Sessionone";
import Sectiontwo from "./Sectiontwo";
import Sectionthree from "./Sectionthree";
import Sectionfour from "./Sectionfour";
import Sectionfive from "./Sectionfive";
import Sectionsix from "./Sectionsix";
import Sectionseven from "./Sectionseven";
import Sectioneight from "./Sectioneight";
import Sectionnine from "./Sectionnine";
import Sectionten from "./Sectionten";
import Footer from "./Footer";
import Navprofile from "./Navprofile";
import { Route, Routes } from "react-router-dom";
import Sidenav from "./Sidenav";
import Dashboard from "./Dashboard";
import Home from "./Home";
import MyProfile from "./MyProfile";
import ChangePassword from "./Change Password";

function App() {
  return (
    <>
      <Nav />
      <Sessionone />
      <Sectiontwo />
      <Sectionthree />
      <Sectionfour />
      <Sectionfive />
      <Sectionsix />
      <Sectionseven />
      <Sectioneight />
      <Sectionnine />
      <Sectionten />
      <Footer />
      {/* <Navprofile /> */}
      {/* <Sidenav /> */}
      <Routes>
        <Route path="/home" element={<Home />}>
          {/* <Route path="/home" element={<Dashboard />} /> */}
          {/* <Route path="/home/myProfile" element={<MyProfile />} /> */}
          {/* <Route path="/home/changePassword" element={<ChangePassword />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
