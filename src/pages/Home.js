import React from "react";
import { Link } from "react-router-dom";
const Home = () => {


 return (
        <div 
        className =
        " h-[calc(100vh-118px)] flex flex-col justify-center items-center text-white  bg-cover bg-no-repeat bg-[url('C:\Users\syeda.sara\Desktop\react_redux\van_life\public\53.png')]"
        >   
            <div className="mb-4">
                <h1 className="text-[30px]">You got the travel plans, we got the travel vans.</h1>
                <p>Add adventure to your life. Rent the perfect van to make your perfect road trip.</p>
            </div>
            <div className="w-[50%] bg-[#E17654] text-center p-2 rounded mt-3">
            <Link to="vans"
            className=" bg-blue-500 p-2 px-3 w-[500px]"
            >Find your van</Link>
            </div>
            
        </div>
    )


};

export default Home;
