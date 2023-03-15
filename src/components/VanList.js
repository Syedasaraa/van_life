import React from "react";
import { Link } from "react-router-dom";

const VanList = ({ content , search ,typeFilter }) => {
  const colors = {
    simple: "#E17654",
    rugged: "#115E59",
    luxury: "#161616",
  };
  const vanElements = content.map((van) => {
    return (
      <Link to={`${van.id}`} key={van.id} state={{searchParam: search , type:typeFilter}} >
        <div key={van.id} className="lg:w-[60%] w-[90%] mx-auto mt-4">
          <img src={van.imageUrl} alt=""/>
          <div className="font-bold lg:text-[20px] md:text-[15px] flex justify-between whitespace-nowrap">
            <p>{van.name}</p>
            <p> ${van.price}</p>{" "}
          </div>
          <div className="text-end">/day</div>
          <div
            className={`bg-[${
              colors[van.type]
            }] p-2 text-center lg:w-[30%] w-[60%] rounded text-white`}
          >
            <p>{van.type}</p>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div className="grid grid-cols-2 bg-[#FFF7ED]">
      {vanElements ? vanElements : <div>...Loading </div>}
    </div>
  );
};

export default VanList;
