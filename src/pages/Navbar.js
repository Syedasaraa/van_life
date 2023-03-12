import React from "react"
import { Link } from "react-router-dom";
function Navbar () {
    return (
        <nav className="flex justify-between bg-[#FFF7ED] top-0 p-4">
        <Link to ="/"
        className="text-[20px] font-bold drop-shadow-md shadow-black"
        > #VANLIFE </Link>
        <div className="flex gap-4">
        <Link to="/about"> About </Link>
        <Link to="/vans"> Vans </Link>
        </div>
        </nav>
    )
} 

export default Navbar;