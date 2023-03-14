import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../pages/Footer";
const Layout = () => {
  return (
    <>
      <div className="min-h-[100vh] flex flex-col bg-[#FFF7ED]">
        <Header />
        <Outlet />
        <div className="mt-auto">
        <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
