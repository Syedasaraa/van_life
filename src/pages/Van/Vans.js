import React, {  useState } from "react";
import VanList from "../../components/VanList";
import { useSearchParams , useLoaderData } from "react-router-dom";
import { getVans } from "../api";

export const loader = () =>{
 return getVans()
}

const Vans = () => {
  const vanData = useLoaderData()
  const [searchParam, setSearchParams] = useSearchParams();
  const typeFilter = searchParam.get("type");

 

  const displayedvans = typeFilter
    ? vanData.filter((item) => item.type.trim() === typeFilter)
    : vanData;


  const setNewParams = (key, value) => {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

 
  

  return (
    <div className="h-screen p-3 bg-[#FFF7ED] ">
      <h1 className="text-[30px] font-extrabold "> Explore our vans options</h1>
      <div className="flex gap-4 lg:ml-4 mt-3 text-gray-400">
        <button
          className={`cursor-pointer px-4 py-1  rounded-lg ${
            typeFilter === "simple" ? "bg-[#E17654] text-white" : "bg-[#FFEAD0]"
          }`}
          onClick={() => setNewParams("type", "simple")}
        >
          Simple
        </button>
        <button
          className={`cursor-pointer px-4 py-1  rounded-lg ${
            typeFilter === "luxury" ? "bg-[#161616] text-white" : "bg-[#FFEAD0]"
          }`}
          onClick={() => setNewParams("type", "luxury")}
        >
          Luxury
        </button>
        <button
          className={`cursor-pointer px-4 py-1 rounded-lg ${
            typeFilter === "rugged" ? "bg-[#115E59] text-white" : "bg-[#FFEAD0]"
          }`}
          onClick={() => setNewParams("type", "rugged")}
        >
          Rugged
        </button>

        {typeFilter && (
          <button
            className="border-b-2 whitespace-nowrap"
            onClick={() => setNewParams("type", null)}
          >
            Clear Filter
          </button>
        )}
      </div>
      <VanList
        content={displayedvans}
        search={searchParam.toString()}
        typeFilter={typeFilter}
      />
    </div>
  );
};

export default Vans;
