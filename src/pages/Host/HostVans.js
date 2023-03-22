import React, { Suspense} from "react";
import { Link , Outlet , useLoaderData , defer , Await} from "react-router-dom";
import { getHostVans } from "../api"

export const loader = () => {
  return defer( { hostVans : getHostVans()})
}

const HostVans = () => {
  const vansPromise = useLoaderData()

  function renderVanElements (hostVansData) {
    const vanElemnets = hostVansData.map(van => (
      <Link to ={`${van.id}`} key={van.id} >
      <div className="flex bg-white gap-4 mb-4 mt-4 rounded">
        <img src={van.imageUrl} alt="" className="lg:w-[10%] w-[15%] rounded m-2"/>
        <div className="m-2">
          <p className="font-bold text-[16px] lg:text-[30px]">{van.name}</p>
          <p className="font-semibold text-gray-400 lg:text-[30px] ">${van.price}/day</p>
        </div>
      </div>
      </Link>
    ))

    return (
      <>
            <h1 className="font-bold text-[30px]"> Your listed vans </h1>
            <div> {vanElemnets} </div>
            <Outlet/>
      </>
    )
  }

  return (
    <div>
      <Suspense fallback= {<h1 className="text-[30px] font-bold">Loading...</h1>}>
      <Await resolve={vansPromise.hostVans}>
        {renderVanElements}
    </Await>
  </Suspense>
 </div>
  );
};

export default HostVans;
