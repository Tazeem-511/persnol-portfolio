import React, { Children } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ Children }) => {
  return (
    <div>
      <h1>Layout</h1>
      <Navbar></Navbar>
      <main>{Children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
