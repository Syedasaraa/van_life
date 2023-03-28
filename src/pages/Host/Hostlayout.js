import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Hostlayout = () => {
  return (
    <div className="w-[95%] mx-auto">
      <nav className="flex gap-4 p-4 font-semibold ">
        <NavLink
          to="."
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Income
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Reviews
        </NavLink>

        <NavLink
          to="vans"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Vans
        </NavLink>
        <div onClick={()=> localStorage.removeItem("loggedin")}
        className="cursor-pointer text hover:border-b-2 hover:font-bold"
        >Logout 
        </div>
      </nav>
      <div className="ml-3">
      <Outlet />
      </div>
      
    </div>
  );
};

export default Hostlayout;
