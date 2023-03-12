import React from "react";
import image from "../assets/image.png";
import { Link } from "react-router-dom";

function About () {
    return(
        (
            <div className="h-screen">
              <div className="lg:h-[500px] h-[300px] ">
                <img className="object-cover h-full w-full " src={image} alt="van" />
              </div>
        
              <div className="w-[90%] mx-auto " > 
                <h1 className="text-[35px] font-bold  ">
                  Don’t squeeze in a sedan when you could relax in a van.
                </h1>
                <div className="mt-4" >
                  <p className="whitespace-pre-wrap">
                    Our mission is to enliven your road trip with the perfect travel van
                    rental. Our vans are recertified before each trip to ensure your
                    travel plans can go off without a hitch. (Hitch costs extra 😉)
                  </p>
                  <p className="mt-4">
                    Our team is full of vanlife enthusiasts who know firsthand the magic
                    of touring the world on 4 wheels.
                  </p>
        
                  <div className="mt-4 bg-[#FFCC8D] h-[200px] rounded p-2">
                    <h1 className="text-[30px] font-bold mb-2 ">Your Destiny is waiting. Your Van is Ready</h1>
                    <div className=" bg-black text-white p-3 w-[150px] rounded-lg md:flex ">
                      <Link to="/vans"> Explore our vans </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
    )
  }

  export default About;