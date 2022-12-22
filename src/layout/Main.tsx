import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

const Main = () => {
  return (
    <div className="max-w-[90%] mx-auto">
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Main;
