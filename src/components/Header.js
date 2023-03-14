import React from "react";
import { Link, NavLink} from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex justify-between bg-[#FFF7ED] top-0 p-4">
      <Link
        to="/"
        className="text-[20px] font-bold drop-shadow-md shadow-black"
      >
        #VANLIFE
      </Link>
      <div className="flex gap-4">
        <NavLink className={({isActive})=> isActive? "font-bold border-b-2 border-black" : ""} to="/host"> Host </NavLink>
        <NavLink className={({isActive})=> isActive? "font-bold border-b-2 border-black " : ""}  to="/about"> About </NavLink>
        <NavLink className={({isActive})=> isActive? "font-bold border-b-2 border-black" : ""} to="/vans"> Vans </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
