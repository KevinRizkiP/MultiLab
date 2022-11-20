import React from "react";
import About from "../components/Layout/About";
import Announcement from "../components/Layout/Announcement";
import Footer from "../components/Layout/Footer";
import Class from "../components/Layout/Class";
import Teams from "../components/Layout/Teams";
import Navbar from "../components/Navbar";

const Compro = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Teams />
      <Class />
      <Announcement />
      <Footer />
    </div>
  );
};

export default Compro;
