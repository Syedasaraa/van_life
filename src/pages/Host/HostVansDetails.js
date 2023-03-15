import React, { useEffect, useState } from "react";
import { useParams, Link, NavLink , Outlet} from "react-router-dom";
const HostVansDetails = () => {
  const params = useParams();
  const [van, setVan] = useState([]);

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params]);

  return (
    <div>
      <Link
        className="font-bold text-gray-500 hover:border-b-2 w-[120px] "
        to=".."
        relative="path"
      >
         &larr; Back to all vans
      </Link>

      <div className="w-[98%] mx-auto bg-white p-2 m-4 rounded">
        {van.length ? (
          <div className="m-3">
            {van.map((van) => (
              <div className="flex flex-col">
              <div key={van.id} className="flex  gap-4 rounded mb-2">
                <img src={van.imageUrl} alt="" className=" w-[25%] rounded" />
                <div className="m-2 flex justify-center flex-col">
                  <p className="bg-[#E17654] text-white rounded p-1 text-center mb-2 w-[70px] ">{van.type}</p>
                  <p className="font-bold text-[25px] lg:text-[40px] ">
                    {van.name}
                  </p>
                  <p className="font-semibold lg:text-[30px] ">
                    ${van.price}/day
                  </p>
                </div>
                </div>
              <div className="flex gap-4 mb-3 mt-3" >
              <NavLink to="." 
              end
              className={({isActive})=>isActive ? "font-bold border-b-2 border-black" : ""}> Details </NavLink>
              <NavLink to="pricing" className={({isActive})=>isActive ? "font-bold border-b-2 border-black" : ""} > Pricing </NavLink>
              <NavLink to="photos" className={({isActive})=>isActive ? "font-bold border-b-2 border-black" : ""} > Photos </NavLink>
              </div>
              <Outlet context={van}/>
              </div>
            ))}
          </div>
        ) : (
          "...Loading"
        )}
      </div>
     
    </div>
  );
};

export default HostVansDetails;
