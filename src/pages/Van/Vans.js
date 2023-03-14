import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { vanData } from "../../components/data";
import VanList from "../../components/VanList";
const Vans = () => {
  const [filter, setFilter] = useState();
  const [content, setContent] = useState(vanData);
  useEffect(() => {
    setContent( vanData.filter((item) => item.type.trim() === filter));
  }, [filter]);
 
  
  return (
    <div className="h-screen p-3 bg-[#FFF7ED] ">
      <h1 className="text-[30px] font-extrabold "> Explore our vans options</h1>
      <div className="flex gap-4 mt-2">
        <div className="cursor-pointer" onClick={(e) => setFilter("simple")}>
          <Button type={"Simple"} />
        </div>
        <div className="cursor-pointer" onClick={(e) => setFilter("luxury")}>
          <Button type={"Luxury"} />
        </div>
        <div className="cursor-pointer" onClick={(e) => setFilter("rugged")}>
          <Button type={"Rugged"} />
        </div>
        <button
          className="border-b-2 whitespace-nowrap"
          onClick={(e) => setFilter("")}
        >
          Clear Filters
        </button>
      </div>
      <VanList content={filter ? content : vanData}/>
    </div>
  );
};

export default Vans;
