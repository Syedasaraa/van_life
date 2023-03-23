import React from "react";
import { Link, NavLink} from "react-router-dom";
import {BiUserCircle} from "react-icons/bi"

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
        <NavLink className={({isActive})=> isActive? "font-bold border-b-2 border-black" : ""} to="/login"> {<BiUserCircle size={22} className="mt-1"/>} </NavLink>
        <div onClick={()=> localStorage.removeItem("loggedin")}
        className="cursor-pointer text hover:border-b-2 hover:font-bold"
        >Logout</div>
      </div>
    </nav>
  );
}

export default Navbar;
