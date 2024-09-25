import React from "react";

import { Outlet } from "react-router-dom";
import Sidenav from "./Sidenav";

const Home = () => {
  return (
    <>
      {/* <Sidenav /> */}
      <Outlet />
    </>
  );
};

export default Home;
