import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Hostlayout = () => {
  return (
    <div className="w-[95%] mx-auto">
      <nav className="flex gap-4 p-4 font-semibold ">
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/reviews"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Reviews
        </NavLink>

        <NavLink
          to="/host/vans"
          className={({ isActive }) => (isActive ? "text-red-500" : "")}
        >
          Vans
        </NavLink>
      </nav>
      <div className="ml-3">
      <Outlet />
      </div>
    </div>
  );
};

export default Hostlayout;
