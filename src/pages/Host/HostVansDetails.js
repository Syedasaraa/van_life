import React, { Suspense } from "react";
import { Await, Link, NavLink , Outlet , useLoaderData , defer} from "react-router-dom";
import { getVan } from "../api";


export function loader ({params})  {
 return defer({ van : getVan(params.id)})
}

const HostVansDetails = () => {
  const vanPromise = useLoaderData()

  function renderVans (van) {
    return (
      <div className="w-[98%] mx-auto bg-white p-2 m-4 rounded">
              <div className="flex flex-col m-3">
              <div key={van.id} className="flex gap-4 rounded mb-2">
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
      </div>
    )
  }
  return (
    <div>
      <Link
        className="font-bold text-gray-500 hover:border-b-2 w-[120px] "
        to=".."
        relative="path"
      >
         &larr; Back to all vans
      </Link>
      <Suspense fallback={<h1 className="text-[30px] font-bold">Loading...</h1>}>
      <Await resolve={vanPromise.van}>
      {renderVans}
    </Await>
    </ Suspense>
    </div>
  );
};

export default HostVansDetails;
