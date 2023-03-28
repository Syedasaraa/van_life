import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "./Footer";
const Layout = () => {
  return (
    <>
      <div className="min-h-[100vh] h-auto bg-[#FFF7ED]">
        <Header />
         <Outlet />
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
