import React, { useState, useEffect } from "react";
import { useParams, Link , Outlet} from "react-router-dom";

const HostVans = () => {
  const params = useParams();
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, [params]);
  
  const vanElemnets = vans.map(van => (
    <Link to ={`/host/vans/${van.id}`} key={van.id}>
    <div className="flex bg-white gap-4 mb-4 mt-4 rounded">
      <img src={van.imageUrl} className="lg:w-[10%] w-[15%] rounded m-2"/>
      <div className="m-2">
        <p className="font-bold text-[16px] lg:text-[30px]">{van.name}</p>
        <p className="font-semibold text-gray-400 lg:text-[30px] ">${van.price}/day</p>
      </div>
    </div>
    </Link>
  ))
  
  return (
    <div>
      <h1 className="font-bold text-[30px]"> Your listed vans </h1>
      <div>
        {vans.length>0 ? (
         <div> {vanElemnets} </div>
        ) : 
        <div className="font-bold text-[40px] text-center"> ...Loading </div>
        }
      </div>
      <Outlet/>
    </div>
  );
};

export default HostVans;
