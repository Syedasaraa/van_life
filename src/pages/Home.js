import React from "react";
import { Link } from "react-router-dom";
const Home = () => {


 return (
        <div 
        className =
        " h-[calc(100vh-50px)] flex flex-col justify-center items-center text-white  bg-cover bg-no-repeat bg-bg_image "
        >   
            <div className="mb-4">
                <h1 className="text-[30px]">You got the travel plans, we got the travel vans.</h1>
                <p>Add adventure to your life. Rent the perfect van to make your perfect road trip.</p>
            </div>
            <Link to="vans"
            className=" bg-[#E17654] p-2 rounded mt-3 px-4 py-2 text-center "
            >Find your van</Link>
        </div>
    )


};

export default Home;
