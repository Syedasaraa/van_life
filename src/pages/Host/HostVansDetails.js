import React, { useEffect, useState } from "react";
import { useParams, Link, NavLink } from "react-router-dom";
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
        className="font-bold text-gray-500 border-b-4 w-[120px] "
        to="/host/vans"
      >
        Back to all vans
      </Link>

      <div className="w-[98%] mx-auto bg-white p-2 m-4 rounded">
        {van.length ? (
          <div className="m-3">
            {van.map((van) => (
              <div key={van.id} className="flex  gap-4 rounded mb-2">
                <img src={van.imageUrl} className=" w-[25%] rounded" />
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
            ))}
              <div className="flex gap-4">
              <NavLink to="/" className={({isActive})=>isActive ? "font-bold border-b-4 " : ""}> Details </NavLink>
              <NavLink to="/" className={({isActive})=>isActive ? "font-bold border-b-4 " : ""} > Pricing </NavLink>
              <NavLink to="/" className={({isActive})=>isActive ? "font-bold border-b-4 " : ""} > Photos </NavLink>
              </div>
          </div>
        ) : (
          "...Loading"
        )}
      </div>
    
    </div>
  );
};

export default HostVansDetails;
